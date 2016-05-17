# OOP Exercises

## 1.

```
function greet() {
  console.log("Hi, my name is " + this.name);
}

var mary = {
  name: 'Mary',
  greet: greet
};
```
mary.greet();
Given the above code, how to call the `greet` function with its `this` variable bound to `mary`?




## 2.

```
function greet() {
  console.log("Hi, my name is " + this.name);
}

var mary = {
  name: 'Mary',
  greet: greet
};

var ben = {
  name: 'Ben'
};
```
ben.__proto__ = mary;
ben.greet();

Given the above code, it is possible (with code) to call greet with its `this` variable bound to `ben`?

## 3.

Create a constructor Vehicle that takes 3 parameters:

* make
* model
* year

A new Vehicle is created thus:

```
var car = new Vehicle('Nissan', 'Leaf', 2015);
```

And it should contain the properties 'make', 'model', and 'year'.

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car = new Vehicle('Nissan', 'Leaf', 2015);
var car = new Vehicle('BMW', 'i3', 2016);

## 4.

Given this constructor `Person`:

```
function Person(name) {
  this.name = name;
}
```

Add a method `greet()` to person objects created using this constructor. The `greet()` method should print to the console: "Hello, I am <name of person>!".

/////////////////////////////////
function Person(name) {
  this.name = name;
}

var bob = new Person('Bob');

Person.protoype.greet = function () {
  console.log("Hello, I am " + this.name);
};

bob.greet();
//////////////////////////////
function Person(name) {
  this.name = name;

}

var bob = new Person('Bob');

Person.prototype.greet = function () {
  console.log('Hello, I am ' + this.name);
};

bob.greet();

## 5. Counter

Write a Counter type. You use the type as follows. First create a counter:

```
var counter = new Counter();
```

Then you can call the counter's `count()` method to count and get the next number in the count.

```
console.log(counter.count()); // prints 1
console.log(counter.count()); // prints 2
console.log(counter.count()); // prints 3
```

Bonus: write implement this using TDD. Copy the unit-test directory for a template of how to setup Jasmine.

function Counter() {
  this.number = 0;
}
var counter = new Counter();

Counter.prototype.count = function() {
  this.number++
  return this.number;
}

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

## 6. Card

Write a Card type. You use the type as follows.

```
var card = new Card(1, 'spades');
card.point // gives 1
card.getPointName() // gives "ace";
card.suit // => "spades"
card.getImageUrl() // gives "images/ace_of_spades.png"
```

function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getPointName = function() {
  if (this.point === 1) {
    return 'ace';
  } else if (this.point === 11) {
    return 'jack';
  } else if (this.point === 12) {
    return 'queen';
  } else if (this.point === 13) {
    return 'king';
  } else {
    return String(this.point);
  }
};

Card.prototype.getImageUrl = function() {
  return 'images/' + this.getPointName() + '_of_' + this.suit + '.png';
};

var card = new Card(1, 'spades');
console.log('Point: ' + card.point);
console.log('Point name: ' + card.getPointName());
console.log('Suit: ' + card.suit);
console.log('Image URL: ' + card.getImageUrl());

## 7. Hand

Write a Hand type. You use the type as follows.

```
var hand = new Hand();
hand.addCard(new Card(1, 'spades'));
hand.addCard(new Card(13, 'hearts'));
hand.getPoints() // gives 21
```

function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

function Hand() {
  this.cards = [];
}

Hand.prototype.addCard = function(card) {
  this.cards.push(card);
};

Hand.prototype.getPoints = function() {
  var hand = this.cards;
  // makes a copy of the hand array, so we don't modify it
  hand = hand.slice(0);

  // sort the array in reverse point order, so Aces are at the end for point decision between 1 or 11
  function compare(card1, card2) {
    return card2.point - card1.point;
  }
  hand.sort(compare);
  var sum = 0;
  for (var i = 0; i < hand.length; i++) {
    var card = hand[i];
    if (card.point > 10) {
      sum = sum + 10;
    } else if (card.point === 1) {
      if (sum + 11 <= 21) {
        sum = sum + 11;
      } else {
        sum = sum + 1;
      }
    } else {
      sum = sum + card.point;
    }
  }
  return sum;
};

var hand = new Hand();
var card1 = new Card(1, 'spades');
hand.addCard(card1);
var card2 = new Card(13, 'hearts');
hand.addCard(card2);
console.log('Points for hand: ' + hand.getPoints());
## 8. Deck

Write a Deck type. You use the type as follows:

```
var deck = new Deck();
deck.numCards() // gives 52;
var card = deck.draw(); // gives a card and removes it from the deck

`````
function Deck() {
  this.cards = [];
  for (var i = 1; i <= 13; i++) {
    this.cards.push({ point: i, suit: 'spades' });
    this.cards.push({ point: i, suit: 'hearts' });
    this.cards.push({ point: i, suit: 'clubs' });
    this.cards.push({ point: i, suit: 'diamonds' });
  }
}

Deck.prototype.draw = function() {
  return this.cards.pop();
};

Deck.prototype.numCards = function() {
  return this.cards.length;
};

var deck = new Deck();
console.log('Cards in deck: ' + deck.numCards());
var card = deck.draw();
console.log('Cards in deck: ' + deck.numCards());
