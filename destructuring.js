//Object Destructuring
const user = {
  id: 339,
  name: "Sakib",
  age: 35,
  education: {
    degree: "Masters",
  },
};

//Object theke name take ber kore ene arekta variable e asign
//korte chai jate onno kono variable e use korte pari

const {
  education: { degree: x },
} = user;
//console.log(x);

const user2 = {
  name: "John",
  age: 34,
  gender: "male",
  sayHi() {
    alert("Hello");
  },
  //   education: {
  //     degree: "B.Sc",
  //   },
};

//console.log(user2.sayHi());

const { education: { degree } = {} } = user2;

//console.log(degree);

//Array Destructuring
var numbers = [1, 2, [3, 100, 500], 4, 5, 6];
var [, a, [, c], , b] = numbers;

//console.log(a, b, c);

//Swapping variables using destructuring
// let a = 1;
// let b = 2;

// let temp = a;
// a = b;
// b = temp;

// [b, a] = [a, b];

const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: "",
    showSplashScreen: false,
  },
};

const { access } = response.settings.undefinedValue || "Some other default";
//console.log(access);

//Example
const result = {
  nouka: "Winner",
  dhanerShish: "Loser",
  plough: "Are you kidding me?",
};

const {
  nouka: n,
  dhanerShish: d,
  plough: p,
  haathi: h = prompt("haathi?"),
} = result;

// console.log(n);
// console.log(d);
// console.log(p);
// console.log(h);

//Example
const user3 = {
  years: 30,
  isAdmin: null,
};

const { username } = user3 || {};
console.log(username);
//console.log(years);
//const test = isAdmin || "b";
//console.log(admin);

let text = null;
text = text ?? "default";
//console.log(text);

const user4 = {
  studentName: "Abir",
  student: {
    stuAge: 20,
    roll: 1,
  },
};

const {
  studentName,
  student: stu,
  student: { stuAge, roll },
} = user4 || {};

console.log(studentName);
console.log(stuAge);
console.log(roll);
console.log(stu);

console.log(gg);
