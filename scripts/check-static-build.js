const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const dist = path.join(root, 'dist');
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

if (!fs.existsSync(dist)) {
  console.error('Static check failed: dist/ does not exist. Run npm run build:static first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const requiredPages = ['index.html', 'it/index.html', 'en/index.html', 'it/404.html', 'en/404.html'];

for (const relative of requiredPages) {
  if (!fs.existsSync(path.join(dist, relative))) errors.push(`Missing required page: ${relative}`);
}

for (const file of htmlFiles) {
  const relativeFile = path.relative(dist, file).replaceAll('\\', '/');
  const html = fs.readFileSync(file, 'utf8');

  if (relativeFile.startsWith('it/') && !/<html\s+lang="it">/i.test(html)) {
    errors.push(`${relativeFile}: missing lang="it"`);
  }
  if (relativeFile.startsWith('en/') && !/<html\s+lang="en">/i.test(html)) {
    errors.push(`${relativeFile}: missing lang="en"`);
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    const reference = match[1];
    if (!reference || /^(?:[a-z]+:|#|\/\/)/i.test(reference)) continue;
    if (reference.startsWith('/')) {
      errors.push(`${relativeFile}: root-absolute reference ${reference}`);
      continue;
    }

    const cleanReference = reference.split(/[?#]/, 1)[0];
    if (!cleanReference) continue;
    const target = path.resolve(path.dirname(file), cleanReference);
    if (!target.startsWith(dist + path.sep) && target !== dist) {
      errors.push(`${relativeFile}: reference escapes dist/ (${reference})`);
    } else if (!fs.existsSync(target)) {
      errors.push(`${relativeFile}: missing target ${reference}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Static check failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Static check passed: ${htmlFiles.length} HTML files, relative links and assets verified.`);
