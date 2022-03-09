const { resolve } = require('path');
const fs = require('fs');
const path = require('path');

const folderPath = 'pages';

const pages = fs.readdirSync(folderPath).map(fileName => {
  return resolve(__dirname, path.join(folderPath, fileName));
});

const configObjectInput = {
  main: resolve(__dirname, 'index.html'),
};

const configObject = {
  build: {
    rollupOptions: {
      input: configObjectInput,
    },
  },
};

pages.forEach((elem, index) => {
  configObjectInput[index] = elem;
});

module.exports = configObject;
