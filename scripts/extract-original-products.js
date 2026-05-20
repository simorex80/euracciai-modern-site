const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'original-site');

const files = [
  ['it', 'mdu', 'mdu.html'],
  ['it', 'macsi', 'macsi.html'],
  ['it', 'divmac', 'divmac.html'],
  ['en', 'mdu', 'mdu-en.html'],
  ['en', 'macsi', 'macsi-en.html'],
  ['en', 'divmac', 'divmac-en.html']
];

const productOrder = {
  it: {
    mdu: ['mdu-1', 'mdu-2', 'mdu-3', 'mdu-4', 'mdu-5', 'mdu-6', 'mdu-7', 'mdu-8', 'mdu-9'],
    macsi: ['macsi-1', 'macsi-2', 'macsi-3', 'macsi-4', 'macsi-5', 'macsi-6'],
    divmac: ['divmac-1', 'divmac-2', 'divmac-3', 'divmac-4']
  },
  en: {
    mdu: ['mdu-2', 'mdu-6', 'mdu-7', 'mdu-8'],
    macsi: ['macsi-1', 'macsi-2', 'macsi-4', 'macsi-5'],
    divmac: ['divmac-1', 'divmac-2', 'divmac-3', 'divmac-4']
  }
};

const skipTitles = new Set([
  'Divisione MDU',
  'Divisione MACSI',
  'Divisione Macchine',
  'MDU division',
  'MACSI division',
  'Machine Tools Divisione'
]);

function decodeHtml(value) {
  return value
    .replace(/&agrave;/g, 'à')
    .replace(/&egrave;/g, 'è')
    .replace(/&eacute;/g, 'é')
    .replace(/&igrave;/g, 'ì')
    .replace(/&ograve;/g, 'ò')
    .replace(/&ugrave;/g, 'ù')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function textFromHtml(html) {
  return decodeHtml(html)
    .replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function splitParagraphs(text) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function cleanText(value) {
  return value
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/([.;:])(?=\S)/g, '$1 ')
    .replace(/www\.\s*([a-z0-9-]+)\.\s*([a-z]{2,})/gi, 'www.$1.$2')
    .replace(/http:\s*\/\//gi, 'http://')
    .replace(/\bobbiettivo\b/gi, (match) => (match[0] === 'O' ? 'Obiettivo' : 'obiettivo'))
    .replace(/\bCilndri\b/g, 'Cilindri')
    .replace(/\bdisponibilita\b/g, 'disponibilità')
    .replace(/\baltà\b/g, 'alta')
    .replace(/\betc\./g, 'ecc.')
    .replace(/\betc\b/g, 'ecc.')
    .replace(/,([A-Za-zÀ-ÿ])/g, ', $1')
    .replace(/\s+/g, ' ')
    .trim();
}

function assetName(source) {
  return source
    .replace(/^(img|docs)\//i, '')
    .replace(/[^a-z0-9.]+/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function extractAttrs(html, attr) {
  return [...html.matchAll(new RegExp(`${attr}=["']([^"']+)["']`, 'gi'))]
    .map((match) => decodeHtml(match[1]))
    .filter((value) => !value.startsWith('?') && !value.startsWith('index.php'));
}

function extractSections(html) {
  const sections = [];
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  const h1Re = /<h1[^>]*id=["']titoloCategoria["'][^>]*>([\s\S]*?)<\/h1>/gi;
  const matches = [...html.matchAll(h1Re)];

  for (let i = 0; i < matches.length; i += 1) {
    const title = textFromHtml(matches[i][1]);
    if (skipTitles.has(title)) continue;

    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : html.length;
    const chunk = html.slice(start, end);
    const descMatch = chunk.match(/<p[^>]*id=["']descrizioneCategoria["'][^>]*>([\s\S]*?)<\/p>/i);
    const descriptionHtml = descMatch ? descMatch[1] : chunk;
    const textHtml = descriptionHtml
      .replace(/<img\b[^>]*>/gi, '')
      .replace(/<a\b[^>]*href=["']docs\/[^"']+["'][^>]*>[\s\S]*?<\/a>/gi, '');

    sections.push({
      title,
      paragraphs: splitParagraphs(textFromHtml(textHtml)).map(cleanText),
      images: extractAttrs(descriptionHtml, 'src').filter((src) => src.startsWith('img/divisioni/')),
      files: extractAttrs(descriptionHtml, 'href').filter((href) => href.startsWith('docs/')).map((href) => ({
        label: path.basename(href),
        href
      }))
    });
  }

  return sections;
}

const output = {};
for (const [locale, division, filename] of files) {
  const html = fs.readFileSync(path.join(SOURCE_DIR, filename), 'utf8');
  output[locale] ||= {};
  output[locale][division] = extractSections(html);
}

fs.writeFileSync(path.join(SOURCE_DIR, 'product-sections.json'), JSON.stringify(output, null, 2));
const details = { it: {}, en: {} };
const assets = [];
for (const [locale, divisions] of Object.entries(output)) {
  for (const [division, sections] of Object.entries(divisions)) {
    const ids = productOrder[locale][division] || [];
    sections.forEach((section, index) => {
      const id = ids[index];
      if (!id) return;
      details[locale][id] = {
        paragraphs: section.paragraphs,
        images: section.images.map((src) => {
          const local = `/img/original-products/${assetName(src)}`;
          assets.push({ type: 'image', source: src, local });
          return local;
        }),
        files: section.files.map((file) => {
          const local = `/docs/original-products/${assetName(file.href)}`;
          assets.push({ type: 'file', source: file.href, local, label: file.label });
          return { label: file.label, href: local };
        })
      };
    });
  }
}

if (details.it['mdu-9'] && !details.it['mdu-10']) {
  details.it['mdu-10'] = details.it['mdu-9'];
}

const ts = `const productDetails = ${JSON.stringify(details, null, 2)};\n\nexport { productDetails };\n`;
fs.writeFileSync(path.join(ROOT, 'product-details.ts'), ts);
fs.writeFileSync(path.join(SOURCE_DIR, 'assets.json'), JSON.stringify(assets, null, 2));
console.log('Wrote original-site/product-sections.json');
console.log('Wrote product-details.ts and original-site/assets.json');
