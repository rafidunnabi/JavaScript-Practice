var myObj = {
  name: "Javascript",
  founder: "Brendan Eich",
  estd: "1995",
  ranking: 1,
};

var keys = Object.keys(myObj);
console.log(keys);

var values = Object.values(myObj); //Object ke iterate korar one of the best ways
console.log(values);

var entries = Object.entries(myObj);
console.log(entries);

//Object shorthand
var x = 4;
var y = 5;
var z = x * y;
var myObj2 = {
  name: "Javascript",
  founder: "Brenden Eich",
  estd: "1995",
  ranking: 1,
  x: x,
  y: y, //ekhane jodi key er naam r value er naam(jeta ekta bairer variable) same hoy tahole x:x, y:y, z:z er poriborte
  z: z, //x,y,z ebhabe likhe deoa jay.
};

var myObj3 = {
  name: "Javascript",
  founder: "Brenden Eich",
  estd: "1995", //e bhabe likhe deoa jabe
  ranking: 1,
  x,
  y,
  z,
};
