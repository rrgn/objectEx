var karrin = { firstName: 'Karrin' };
var father = { firstName: 'Bobby', lastName: 'Allyson' };
var grandfather = { hair: 'brown' };

karrin.__proto__ = father;
father.__proto__ = grandfather;

console.log('Hello I am ' + karrin.firstName +
  ' ' + karrin.lastName + ' and I have ' + karrin.hair + ' hair.');
