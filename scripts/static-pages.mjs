import { readFile, writeFile, mkdir } from 'node:fs/promises';
const groups = JSON.parse(await readFile('src/app/data/journey.json', 'utf8'));
const html = await readFile('dist/index.html', 'utf8');
const projects = await readFile('src/app/data/projects.ts','utf8');
const count = [...projects.matchAll(/\btitle:/g)].length;
const pages = ['about','research','projects','experience','community','press','gallery','contact', ...groups.flatMap(g=>g.cards.map(c=>c.href.replace(/\/$/,''))), ...Array.from({length:count},(_,i)=>`projects/${i+1}`)];
for (const route of pages) {
  await mkdir(`dist/${route}`, {recursive:true});
  await writeFile(`dist/${route}/index.html`, html.replace(/<title>.*?<\/title>/,`<title>${route.split('/').map(s=>s.replaceAll('-',' ')).join(' · ')} | Prisha Goel</title>`));
}
await writeFile('dist/404.html',html);
console.log(`Generated ${pages.length} standalone pages with direct-link and reload support.`);
