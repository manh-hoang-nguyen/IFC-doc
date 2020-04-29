const fs = require('fs');

const { storeyGenerator } = require('../storeyGenerator');


const levels = [
    {
      ifcGuid: '1xS3BCk291UvhgP2dvNMQJ',
      name: 'Niveau 1',
      elevation: 1,
    },
    {
      ifcGuid: '1xS3BCk291UvhgP2dvNtSE',
      name: 'Niveau 2',
      elevation: 2,
    },
    {
      ifcGuid: '1xS3BCk291UvhgP2dvNMKI',
      name: 'Niveau 2',
      elevation: 3,
    },
  ];

const { result, endNum } = storeyGenerator(20, '#30', levels);
// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/storey.ifc', result, function (err) {
  if (err) throw err;
  console.log('Storey is created successfully.', `End Num = ${endNum}`);
});
