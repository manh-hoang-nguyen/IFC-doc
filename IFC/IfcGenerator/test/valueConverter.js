const { valueConverter } = require('../utils/valueConverter');
const value1 = '';
const value2 = '$';
const value3 = 10.1;
const value4 = 2;
const value5 = '#5';
const value6 = 'testName';

console.log("Expected: ''", `Out: ${valueConverter(value1)}`);
console.log('Expected: $', `Out: ${valueConverter(value2)}`);
console.log('Expected: 10.1', `Out: ${valueConverter(value3)}`);
console.log('Expected: 2', `Out: ${valueConverter(value4)}`);
console.log('Expected: #5', `Out: ${valueConverter(value5)}`);
console.log(`Expected: '${value6}'`, `Out: ${valueConverter(value6)}`);

// Expected: '' Out: ''
// Expected: $ Out: $
// Expected: 10.1 Out: 10.1
// Expected: 2 Out: 2
// Expected: #5 Out: #5
// Expected: 'testName' Out: 'testName'
