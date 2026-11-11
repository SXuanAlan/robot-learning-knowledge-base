/* Render authored LaTeX at build time: no math scripts or font downloads in the reader. */
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const katex = require('./vendor/katex/katex.cjs');
const decode = value => value.replace(/&(amp|lt|gt|quot|apos|#39);/g,
  (_,entity)=>({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",'#39':"'"})[entity]);

// MathML Core browsers use Unicode mathematical alphabets; legacy mathvariant
// attributes other than "normal" are not consistently painted. Encode them
// explicitly so expectation symbols and calligraphic losses survive previews.
const special = {
  'double-struck':{C:'ℂ',H:'ℍ',N:'ℕ',P:'ℙ',Q:'ℚ',R:'ℝ',Z:'ℤ'},
  script:{B:'ℬ',E:'ℰ',F:'ℱ',H:'ℋ',I:'ℐ',L:'ℒ',M:'ℳ',R:'ℛ',e:'ℯ',g:'ℊ',o:'ℴ'},
  bold:{}
};
const offsets = {'double-struck':[0x1d538,0x1d552,0x1d7d8],script:[0x1d49c,0x1d4b6,null],bold:[0x1d400,0x1d41a,0x1d7ce]};
function mathAlphabet(html) {
  return html.replace(/<(mi|mn) mathvariant="(double-struck|script|bold)">([A-Za-z0-9]+)<\/\1>/g,
    (_,tag,variant,letters)=>`<${tag}>${[...letters].map(c=>{
      if(special[variant][c])return special[variant][c];
      const type=/[A-Z]/.test(c)?0:/[a-z]/.test(c)?1:2;
      const offset=offsets[variant][type];
      return offset ? String.fromCodePoint(offset+c.charCodeAt(0)-[65,97,48][type]) : c;
    }).join('')}</${tag}>`);
}

export function renderMath(html, page) {
  return html.replace(/<(div|span)\b([^>]*\bdata-tex="([^"]*)"[^>]*)>\s*<\/\1>/g,
    (_,tag,attrs,source)=>{
      const tex=decode(source);
      let rendered;
      try {
        rendered=katex.renderToString(tex, {
          output:'mathml', displayMode:tag==='div', throwOnError:true,
          trust:false, strict:'error'
        });
      } catch(error) {throw new Error(`LaTeX in ${page}: ${error.message}`);}
      // The annotation inside MathML retains the exact LaTeX source.
      attrs=attrs.replace(/\s*data-tex="[^"]*"/,'');
      return `<${tag}${attrs}>${mathAlphabet(rendered)}</${tag}>`;
    });
}
