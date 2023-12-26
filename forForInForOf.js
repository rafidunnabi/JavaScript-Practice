//for loop, for in , for of

//for loop
// let i = 1;
// for (; i <= 5; i++) {
//   console.log(i);
// }

//for in
const myObj = {
  name: "Javascript",
  estd: "1995",
  founder: "Brendan Eich",
};

for (property of myObj) {
  console.log(property);
}

//for of
// const myArray = [1, 2, 3, 4, 5];

// for (element in myArray) {           //for in dile object er key er upore iterate korbe
//   console.log(element);              // in dile index dekhabe array er khetre
// }

const myString = "I love Javascript";
for (element of myString) {
  console.log(element); //for of dile object ke iterate kora jay na.
}

// for in is for objects
// for of is for arrays
