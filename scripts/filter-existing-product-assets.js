const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const detailsPath = path.join(ROOT, 'product-details.ts');
const detailsSource = fs.readFileSync(detailsPath, 'utf8');
const objectSource = detailsSource
  .replace(/^const productDetails = /, '')
  .replace(/;\n\nexport \{ productDetails \};\n$/, '');
const productDetails = JSON.parse(objectSource);

function exists(publicPath) {
  return fs.existsSync(path.join(ROOT, 'public', publicPath.replace(/^\//, '')));
}

for (const locale of Object.keys(productDetails)) {
  for (const id of Object.keys(productDetails[locale])) {
    const item = productDetails[locale][id];
    item.images = (item.images || []).filter(exists);
    item.files = (item.files || []).filter((file) => exists(file.href));
  }
}

fs.writeFileSync(detailsPath, `const productDetails = ${JSON.stringify(productDetails, null, 2)};\n\nexport { productDetails };\n`);
