import fs from 'fs';
import path from 'path';

const routes = new Set();
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') {
      let r = p.replaceAll('\\', '/').replace(/^dist/, '').replace(/index\.html$/, '');
      routes.add(r);
    }
  }
}
walk('dist');

const bad = new Map();
function check(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) check(p);
    else if (f.endsWith('.html')) {
      const html = fs.readFileSync(p, 'utf8');
      const links = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
      for (let l of links) {
        if (l.startsWith('/_') || l.startsWith('/images') || l.includes('.')) continue;
        if (!l.endsWith('/')) l = l + '/';
        if (!routes.has(l)) bad.set(l, (bad.get(l) || 0) + 1);
      }
    }
  }
}
check('dist');

console.log('Total routes:', routes.size);
if (bad.size === 0) console.log('NO BROKEN INTERNAL LINKS ✓');
else {
  console.log('BROKEN LINKS:');
  for (const [k, v] of bad) console.log('  ', k, `(${v}x)`);
  process.exit(1);
}
