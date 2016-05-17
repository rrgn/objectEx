# Object Oriented Programming in JavaScript

## First Taste

You've already seen method calls with arrays, strings, and jQuery.

```
var string = 'some string of words';
string.split(' ');

var array = [1, 2, 3];
arr.push(4);
var four = arr.pop();

var buttonText = $('button').text();
```

Now we will learn how to make our own objects with our own custom methods.

## Why?

The purpose of object-oriented programming (OOP) is to make complex code more manageable by giving it

1. more structure
2. a way of implementing modules that can operate independently

We will refactor a game using OOP to see an example. Imagine if in a blackjack game's source code, you could talk about a card, a hand, a player or a deck as if they were specialized objects. Example:

```
var card = deck.deal();
player.take(card);
if (player.isBusted()) {
  console.log('You busted!');
} else {
  console.log('You have ' + player.getPoints() + ' points.');
}
```

That is the philosophy of OOP.

## What is this?

"this" is a special variable in JavaScript. Unlike function parameters, which are passed in to the function within parenthesis:

```
function hello(subject) {
  console.log('Hello, ' + subject + '!');
}
hello("Gary");
```

"this" is bound to the object to the left-hand side of the dot operator when a *method* is called:

```
function hello() {
  console.log('Hello, ' + this.name + '!');
}
var gary = {
  name: 'Gary',
  hello: hello
};
gary.hello();
```

How does this work? `gary.greet` is an ordinary function, nothing special about it. `this` is bound to `gary` only at the moment when `gary.hello()` is called. This JavaScript behavior is called late-binding, and is different from most object-oriented languages.

### Regular Functon calls

If you call a function normally, not a method call:

```
function hello() {
  console.log('Hello, ' + this.name + '!');
}

hello();
```

`this` will be bound to the global object, which for the browser, it's the window object. In strict mode, however, `this` will be bound to undefined:

```
function hello() {
  'use strict'
  console.log('Hello, ' + this.name + '!');
}

hello();
```

The above yields the error: `Uncaught TypeError: Cannot read property 'name' of undefined`.

Strict mode is a safer variant of JavaScript that in supported in most JavaScript environments now. It is recommended by most professionals. More on [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

## Constructors and `new`

```
{} vs new Object();
```

The `new` keyword is used to instantiate (just a fancy word for create) a new object using a *constructor* function. A constructor function is also simply an ordinary function, whose `this` variable is bound to the object that is *being* created. A constructor function has a similar role to classes in other object-oriented programming languages. For those not familiar with other languages, you can thing of constructor functions as representing a type or a kind of thing.

A constructor's job is to setup its initial state. Often times, it merely takes in a number of arguments and store them as properties in the object that is being newly created. Example:

```
function Person(name) {
  this.name = name;
}
var karrin = new Person('Karrin');
console.log(karrin.name); // says Karrin
```

Other times, it will set properties to default values:

```
function Team(name) {
  this.name = name;
  this.players = []; // initialize a players array
}
```

## Adding methods to a constructor through prototype

If you want to add methods to the objects that are created by a constructor, the standard way to do it is by attaching functions to that constructor's prototype object:

```
Person.prototype.greet = function () {
  console.log('Hello, I am ' + this.name + '!');
};
...
karrin.greet();
```

Another example:

```
var team = new Team('Learners');
team.addPlayer(new Player('Cody'));
team.addPlayer(new Player('Dave'));
```

## Using Constructors and Prototype object vs Assembling Objects

Should you use the constructor + adding methods to the prototype object or by just attaching functions to an object literal?

## Prototype Inheritance

Prototype inheritance is a subject that I was very interested in - in a past life.

http://tobyho.com/2011/11/11/js-object-inheritance/

## Terms

* constructor - a function that is made to represent a type or role of object. Objects of that type is created by calling `new Constructor()`
* method - a function that is attached to an object. It is usually called by the syntax: `obj.method()`
* property - a "slot" or "key" that is stored on an object. You can read or write to it. It is accessed using the syntax: 'obj.property'
