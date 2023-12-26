"use strict";
var printPlayerName = function (name) {
  //console.log(name);
};
printPlayerName("Sakib");

//implicit binding

//implicit binding --> First e dekhte hobe kon line e function ta call hoise.
//Jekhane call hoise sheikhane oi function er age kono dot notation thakle oi dot er thik left e jeta ase shetai holo this.
var sakib = {
  name: "Sakib", //name property na thakle this hobe window object
  age: 35,
  printPlayerName: function (name) {
    //console.log(this.name);
  },
};

sakib.printPlayerName(); //implicit binding

var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

var mushfiq = {
  name: "Mushfiq",
  age: 34,
};

var tamim = {
  name: "Tamim",
  age: 44,
};

console.log(printPlayerNameFunction(mushfiq));
printPlayerNameFunction(mushfiq);
printPlayerNameFunction(tamim);

mushfiq.printPlayerName();
tamim.printPlayerName();

console.log(mushfiq);
console.log(sakib);

//Another example of implicit binding
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. X",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

var mashrafi = Person("Mashrafi", 34);
mashrafi.printName();
mashrafi.father.printName();

//Explicit binding

var printStudent = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2}, ${v3}`);
};

var abir = {
  name: "Abir",
  age: 35,
};
var v1 = "Player";
var v2 = "All-rounder";
var v3 = "Best player";

var v = [v1, v2, v3];
printStudent.call(abir, v1, v2, v3); //.call prothom jei parameter ta receive kore sheita holo ekta object jeita diye ami function ta ke call korbo
//ekhane explicitly bole dichchi printStudent function er moddhe this ke hobe
//call method takes arguments separately

printStudent.apply(abir, v); //.apply second argument hishabe ekta array ney instead of an argument list
//apply method takes arguments as an array.

var newFunc = printStudent.bind(abir, v1, v2, v3); //.bind dile exactly .call er motoi kaj kore just function ta ke directly
//call kore dey na, ekta function er instance return kore.
newFunc();

//new binding
function Person2(name, age) {
  this.name = name; //ekhane shey notun ekta object create kore jeita hochche 'this' and sheitar vitore name set kore dey
  this.age = age; //ekahne shey notun create kora 'this' object er bhitore set kore dey age
  console.log(`${this.name} is ${this.age} years old`);
}
var sakib = new Person2("Sakib", 35);

//Window binding

var PrintOfficer = function () {
  console.log(this.name); //undefined
};

var sakib = {
  name: "Sakib",
};

PrintOfficer(); //jokhon previous kono binding e nai tokhon window binding by default kaj korbe.
