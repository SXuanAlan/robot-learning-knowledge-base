/* Build standalone pages for file:// and T3 HTML preview. No packages required. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {renderMath} from './math.mjs';
const root = path.dirname(fileURLToPath(import.meta.url));
const context = {};
vm.runInNewContext(['catalog.js','company-catalog.js','branch-catalog.js','expansion-catalog.js'].map(file=>fs.readFileSync(path.join(root,'assets',file),'utf8')).join('\n')+';globalThis.catalog={REFS,MEDIA}',context);
const {REFS,MEDIA} = context.catalog;
const refs = new Map(REFS.map(r=>[r.n,r]));
const css = fs.readFileSync(path.join(root,'assets/site.css'),'utf8');
const js = fs.readFileSync(path.join(root,'assets/site.js'),'utf8');
const pages = fs.readdirSync(path.join(root,'src'),{recursive:true})
  .filter(file => file.endsWith('.html')).sort();
const companyRefs = new Set([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,30,31,32,33,34,36,37,38,39,40,41,42,43]);
const bi = v => typeof v === 'string' ? v : `<span data-l="zh">${v.zh}</span><span data-l="en">${v.en}</span>`;
const esc = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
function inlineFile(file) {
  // Keep original assets; use compressed equivalents when available.
  const webp = file.replace(/\.(?:png|jpe?g)$/i,'.webp');
  if(webp !== file && fs.existsSync(webp)) file = webp;
  const ext = path.extname(file).slice(1);
  const mime = {jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp',svg:'image/svg+xml'}[ext];
  if (!mime) throw new Error(`Unsupported image: ${file}`);
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;
}
function box(m,key,hidden=false,compact=false) {
  const small = path.join(root,'assets/posters/compact',key+'.webp');
  const poster = compact && fs.existsSync(small) ? small : path.join(root,'assets/posters',key+'.jpg');
  const thumb = fs.existsSync(poster) ? inlineFile(poster) : '';
  const credit = m.credit ? `<span class="credit">${m.credit}</span>` : '';
  let content;
  if(m.kind==='video') content = `<video controls playsinline preload="none"${m.fit?' class="fit"':''} src="${esc(m.src)}"${thumb?` poster="${thumb}"`:''} aria-label="${esc(m.cap?.en||'Project video')}"><a href="${esc(m.src)}">Open video</a></video><p class="media-error" hidden>${bi({zh:'视频加载失败，可使用下方“打开视频”链接。',en:'Video unavailable. Try the “Open video” link below.'})}</p>`;
  else if(m.kind==='yt') content = `<a class="ytb" href="https://www.youtube.com/watch?v=${m.id}" target="_blank" rel="noopener" style="background-image:url('${thumb||`https://i.ytimg.com/vi/${m.id}/hqdefault.jpg`}')" aria-label="Open video on YouTube"><span class="pbtn"></span><em>${bi({zh:'在 YouTube 播放',en:'Watch on YouTube'})} ↗</em></a>`;
  else content = `<img src="${esc(m.src)}" alt="${esc(m.cap?.en||'Project illustration')}" loading="lazy">`;
  return `<div class="ph"${hidden?' hidden':''}>${content}${credit}</div>`;
}
function media(keys,compact=false) {
  return keys.trim().split(/\s+/).map((key,i)=>{
    const m=MEDIA[key]; if(!m)throw new Error(`Unknown media: ${key}`);
    const r=refs.get(m.ref), source=r.links.find(l=>['Project','Blog'].includes(l[0]))||r.links[0];
    let body=box(m,key,false,compact);
    if(m.alt) {
      const tabs=m.tabs||[{zh:'结果',en:'Result'},{zh:'失败片段',en:'Failure'}];
      body=`<div class="mwrap">${body}${box(m.alt,key+'-alt',true,compact)}<div class="mtabs" role="group" aria-label="Video views">${tabs.map((t,n)=>`<button type="button" aria-pressed="${n===0}" data-m="${n}">${bi(t)}</button>`).join('')}</div></div>`;
    }
    const direct=m.kind==='video'?m.src:`https://www.youtube.com/watch?v=${m.id}`;
    return `<figure class="sub" data-media-key="${key}">${body}<figcaption>(${String.fromCharCode(97+i)}) ${bi(m.cap)} [${m.ref}]<br><a class="media-source" href="${source[1]}" target="_blank" rel="noopener">${bi({zh:'项目来源',en:'Project source'})} ↗</a> · <a href="${direct}" target="_blank" rel="noopener">${bi({zh:'打开视频',en:'Open video'})} ↗</a></figcaption></figure>`;
  }).join('');
}
for(const page of pages) {
  let html=fs.readFileSync(path.join(root,'src',page),'utf8');
  html=html.replace(/<link\b[^>]*href="[^"]*assets\/site.css"[^>]*\/?\s*>/,`<style data-bundle="site">${css}</style>`);
  html=html.replace(/<script\b[^>]*src="[^"]*assets\/(?:catalog|site).js"[^>]*>\s*<\/script>/g,'');
  html=html.replace(/<div class="fig-grid ([^"]*)" data-media="([^"]+)"><\/div>/g,(_,cl,keys)=>`<div class="fig-grid ${cl}" data-media="${keys}">${media(keys,['01-manipulation/index.html','02-legged/index.html','03-vla/index.html'].includes(page))}</div>`);
  const used=new Set();
  const home=page==='index.html';
  let inLink=false;
  html=html.split(/(<[^>]*>)/g).map(part=>{
    if(part.startsWith('<')) {if(/^<a\b/.test(part))inLink=true;if(/^<\/a>/.test(part))inLink=false;return part;}
    if(inLink)return part;
    return part.replace(/\[(\d{1,3}(?:\s*,\s*\d{1,3})*)\]/g,(_,ns)=>`<span class="cite">[${ns.split(/\s*,\s*/).map(n=>{
      if(!refs.has(Number(n)))throw new Error(`Missing reference ${n} in ${page}`);
      used.add(Number(n));
      const base=home?`${companyRefs.has(Number(n))?'lenses/companies':'06-data-scaling'}/index.html`:'';
      return `<a href="${base}#ref-${n}">${n}</a>`;
    }).join(', ')}]</span>`);
  }).join('');
  html=renderMath(html,page);
  if(/\bdata-tex=/.test(html))throw new Error(`Unrendered LaTeX in ${page}`);
  html=html.replace(/<ol class="refs" id="refList"><\/ol>/,`<ol class="refs" id="refList">${REFS.filter(r=>used.has(r.n)).sort((a,b)=>a.n-b.n).map(r=>`<li id="ref-${r.n}"><span class="rn">[${r.n}]</span><div>${r.cite}. <span class="rt">${r.title}.</span> ${r.venue}. <span class="rl">${r.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join(' · ')}</span></div></li>`).join('')}</ol>`);
  html=html.replace(/(<img\b[^>]*\bsrc=")([^":]+)(")/g,(_,pre,src,post)=>pre+inlineFile(path.resolve(root,path.dirname(page),src))+post);
  html=html.replace(/<noscript>[\s\S]*?<\/noscript>/,'<noscript><style>.mwrap>.ph[hidden]{display:block!important}.mtabs{display:none}</style></noscript>');
  html=html.replace('</body>',()=>`<script data-bundle="site">(() => {\n${js}\n})();</script></body>`);
  if(html.length>512000)throw new Error(`${page} exceeds the T3 preview limit: ${html.length} characters`);
  fs.mkdirSync(path.dirname(path.join(root,page)),{recursive:true});
  fs.writeFileSync(path.join(root,page),html);
  console.log(`${page}: ${(Buffer.byteLength(html)/1024).toFixed(0)} KB`);
}
