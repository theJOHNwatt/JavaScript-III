/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Used in global scope. If none of the other rules apply the `this` keyword, defaults to the window object. Unless you are in `strict mode` in which case it defaults to undefined.
* 2. Implicit Binding: Most commonly used. After a function is invoked, to the left of the dot is the keyword it refers to. This is only used for objects and methods.
* 3. New Binding: Uses the `new` keyword to create a new object and `this` points to it.
* 4. Explicit Binding: Whenever `call` or `apply` method is used, `this` becomes explicitly defined. You can override what the constructor objects get set to.
*
* write out a code example of each explanation above
*/

// Principle 1 

// code example for Window Binding

function favFood(food) {
    console.log(this.food);
  }
  favFood("Pizza");

// Principle 2

// code example for Implicit Binding

let myFavFood = {
    name: 'John',
    food: 'pizza',
    favFood: function () {
        console.log (`My name is ${this.name} and my favorite food is ${this.food}!`);
    }
}

myFavFood.favFood();

// Principle 3

// code example for New Binding

function FavSoccerTeam(name, soccerTeam) {
    this.person = name;
    this.team = soccerTeam;
    this.speak = function() {
        console.log (`${this.person}'s favorite soccer team is ${this.team}.`);
    };
}

const john = new FavSoccerTeam ('John', 'Barcalona');
const ann = new FavSoccerTeam ('Ann', 'Manchester United');
const ally = new FavSoccerTeam ('Ally', 'Bayern Munich');

john.speak();
ann.speak();
ally.speak();

// Principle 4

// code example for Explicit Binding

john.speak.call(ally);