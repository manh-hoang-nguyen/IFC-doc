const fs = require('fs');

fs.readFile('./IfcFiles/Mur avec ouverture.ifc', 'utf8', (err, data) => {
  console.log(data);
});
