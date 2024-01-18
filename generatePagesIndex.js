const fs = require('fs');
const path = require('path');

// Function to replace or append export statements to a target file
function replaceOrAppendExportsToTarget(exportStatements, targetFilePath) {
  const existingContent = fs.readFileSync(targetFilePath, 'utf-8');


  const uniqueExportStatements = new Set(exportStatements);

  // Remove existing export statements from the target content
  const cleanedContent = [...existingContent.split('\n')]
    .filter(line => !uniqueExportStatements.has(line.trim()))
    .join('\n');

  // Remove existing export statements from the target content
  const newContent = cleanedContent + '\n' + exportStatements.join('\n')
  
  // Append or replace export statements
  fs.writeFileSync(targetFilePath, newContent);
}

// Function to recursively get all files in a directory
function getAllFiles(dirPath, fileList = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      // Recursively call the function for nested directories
      getAllFiles(fullPath, fileList);
    } else {
      // Add the file path to the list
      fileList.push(fullPath);
    }
  });

  return fileList;
}

// Function to find all folders containing a 'pages' subdirectory
function findFoldersWithPages(rootDir) {
  const allFolders = fs.readdirSync(rootDir);

  return allFolders.filter(folder => {
    const folderPath = path.join(rootDir, folder);
    return fs.existsSync(path.join(folderPath, 'pages')) && fs.statSync(path.join(folderPath, 'pages')).isDirectory();
  });
}

// Example usage
const pluginsDirectory = path.join(__dirname, 'src', 'plugins');

const potentialUnknownFolders = findFoldersWithPages(pluginsDirectory);

if (potentialUnknownFolders.length === 0) {
  console.log('No folders with "pages" subdirectory found.');
} else {
  potentialUnknownFolders.forEach(unknownFolder => {
    const pagesDirectory = path.join(pluginsDirectory, unknownFolder, 'pages');
    const allFilesInPages = getAllFiles(pagesDirectory);

    const exportStatements = allFilesInPages.map((file) => {
      const componentName = path.basename(file, '.tsx');
      return `export * from '../plugins/${unknownFolder}/pages/${componentName}';`;
    });

    // const indexContent = exportStatements.join('\n');

    const pagesDir = path.join(__dirname, 'src', 'pages');

    replaceOrAppendExportsToTarget(exportStatements, path.join(pagesDir, 'index.ts'));
  });
}

