const { readdir, writeFile } = require('fs/promises');
const { extname } = require('path');

const clearPaths = (paths) => {
  return paths.filter((path) => !['.', '..', 'index.ts'].includes(path));
};

const createFileContent = (paths) => {
  const rows = [];

  paths.map((path) =>
    rows.push(`export * from './${path.replace(extname(path), '')}';`)
  );

  return rows.join('\n');
};

const createIndexFile = (content, directory) => {
  return writeFile(`./src/${directory}/index.ts`, content);
};

[
  'components',
  'hooks',
  'icons',
  'screens',
  'types',
  'contexts',
  'providers',
].map((directory) => {
  readdir(`./src/${directory}`)
    .then(clearPaths)
    .then(createFileContent)
    .then((content) => createIndexFile(content, directory))
    .then(() => console.log(`Index criado com sucesso na pasta ${directory}.`));
});
