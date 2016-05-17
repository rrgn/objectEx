function hello(subject) {
  console.log('Hello, my name is ' + this.name + '!');
}

var garysNumbers = {
  home: '770-338-2348',
  cell: '404-388-3848'
};

var gary = {
  name: 'Gary',
  greet: hello,
  phoneNumbers: garysNumbers
};

var mary = {
  name: 'Mary',
  greet: hello
};
var bob = { name : 'Bob' };

hello(gary);
gary.greet();
mary.greet();
