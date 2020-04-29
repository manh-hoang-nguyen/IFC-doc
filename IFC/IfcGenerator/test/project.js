const fs = require('fs');

const { projectGenerator } = require('../projectGenerator');

const project = {
    ifcProjectGuid:'gsdfsfsdfsdfsf',
    name: 'projectTest',
    description:'description of project'
}

const {endNum, result} = projectGenerator(5,project,'#2','#3','#10');

fs.writeFile('./IFC/IfcGenerator/outputTests/project.ifc', result, function (err) {
    if (err) throw err;
    console.log('OwnerHistory is created successfully.', `End Num = ${endNum}`);
  });
  