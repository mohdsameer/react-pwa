// File: generatePagesIndex.js

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname); // Correcting the path here
console.log('pagesDir', pagesDir)

const files = fs.readdirSync(pagesDir).filter((file) => file.endsWith('.tsx'));

const exportStatements = files.map((file) => {
  const componentName = path.basename(file, '.tsx');
  return `export * from './${componentName}';`;
});

const indexContent = exportStatements.join('\n');

fs.writeFileSync(path.join(pagesDir, 'index.ts'), indexContent);
