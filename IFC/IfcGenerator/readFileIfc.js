const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'body.ifc');

fs.readFile(filePath, (err, data) => {
  if (err) console.log(err);
  else {
    const array = data
      .toString()
      .replace(/\n|\r/g, '') //remove break line
      .split(';')
      .filter((str) => str.includes('WALL'));
    console.log(array);
  }
});
