//template literals
var a = 5,
  b = 6;
// console.log("I am " + a + "and " + "I am " + b);
// console.log(`I am ${a} and I am ${b}`);
// console.log(`I am ${a + b}`); //answer hobe addition

console.log(`I am test
                                    
            This is hello`); //thik eibhabei result show korbe.

//tagged template literals
var player1 = "Sakib";
var player2 = "Tamim";
function modifier(strings, ...values) {
  console.log(strings);
  console.log(values);
}
console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);
