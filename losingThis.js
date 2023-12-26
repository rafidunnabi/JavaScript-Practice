//Losing this
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`); //kono object method ke onno kono method e callback hishabe pass korle this is lost.
  },
};
setTimeout(user.sayHi, 1000); // Here setTimeout got the function user.sayHi seperately from the object.
//setTimeout in-browser is a little special, it sets this = window for the function call.
//So, for this.firstName it tries to get window.firstName, which does not exist.
//So, sometimes this becomes undefined.

//The setTimeout can also be written as:
let f = user.sayHi;
setTimeout(f, 1000); // lost user context;

//Solution 1:
//Wrapper

let user2 = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

setTimeout(function () {
  user.sayHi();
}, 1000);
