import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const textExtensions = new Set(['.html', '.css', '.js', '.xml', '.txt']);
const errors = [];
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (extname(path) === '.html') htmlFiles.push(path);
  }
}

function localTarget(url) {
  const clean = decodeURI(url.split('#')[0].split('?')[0]);
  if (!clean.startsWith('/')) return undefined;
  const relative = clean.slice(1);
  if (!relative) return join(root, 'index.html');
  if (clean.endsWith('/')) return join(root, relative, 'index.html');
  const direct = join(root, relative);
  if (existsSync(direct)) return direct;
  return join(root, relative, 'index.html');
}

if (!existsSync(root)) {
  console.error('dist/ does not exist. Run the build first.');
  process.exit(1);
}

walk(root);

const titleSet = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const relative = file.slice(root.length);
  if (!/<html\s+lang="[^"]+"/.test(html)) errors.push(`${relative}: missing html lang`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const legacyRedirect = /<meta name="robots" content="noindex">/.test(html);
  if (!title) errors.push(`${relative}: missing title`);
  else if (!legacyRedirect) {
    if (titleSet.has(title)) errors.push(`${relative}: duplicate title: ${title}`);
    titleSet.add(title);
  }
  if (!legacyRedirect && !/<link rel="canonical" href="https:\/\/www\.xiaoxingyu2001\.com\//.test(html)) {
    errors.push(`${relative}: missing canonical URL`);
  }
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    const target = localTarget(url);
    if (target && !existsSync(target)) errors.push(`${relative}: broken internal reference ${url}`);
  }
}

function scanText(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) scanText(path);
    else if (textExtensions.has(extname(path))) {
      const text = readFileSync(path, 'utf8');
      if (/101\.6\.134\.83|:8888|localhost|127\.0\.0\.1/i.test(text)) {
        errors.push(`${path.slice(root.length)}: prohibited legacy/server reference`);
      }
    }
  }
}

scanText(root);

for (const required of ['index.html', 'en/index.html', '404.html', 'sitemap.xml', 'robots.txt', 'CNAME']) {
  if (!existsSync(join(root, required))) errors.push(`missing required output: ${required}`);
}

if (errors.length) {
  console.error(`Build verification failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files: internal links, metadata, required routes, and server-reference scan passed.`);

