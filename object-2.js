var obj1 = {};
var obj2 = new Object();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var mary = new Person('Mary', 15);

Person.prototype.greet = function () {
  console.log('Hello, I am ' + this.name +
    ' and I am ' + this.age + ' and I have ' + this.hair + ' hair!');
};

Person.prototype.hair = 'Brown';

var john = new Person('John', 5);

mary.greet();
john.greet();
