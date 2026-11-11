/* Build and stage only standalone website pages for GitHub Pages. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import './build.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const destination = path.join(root, '_site');
const pages = fs.readdirSync(path.join(root, 'src'), {recursive: true})
  .filter(file => file.endsWith('.html'));
// This article is maintained directly rather than generated from src/.
pages.push('05-agentic-robotics/index.html');

fs.rmSync(destination, {recursive: true, force: true});
fs.mkdirSync(destination, {recursive: true});
for (const page of pages.sort()) {
  const output = path.join(destination, page);
  fs.mkdirSync(path.dirname(output), {recursive: true});
  fs.copyFileSync(path.join(root, page), output);
}
fs.writeFileSync(path.join(destination, '.nojekyll'), '');
console.log(`Staged ${pages.length} standalone pages in _site/`);
