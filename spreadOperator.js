//spread operator
var numbers = [1, 2, 3];
var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6]; //normally korle spread operator chara
var newNumbersWithSpread = [...numbers, 4, 5, 6]; //...numbers dile shey array akarei pathabe na borong choriye dibe
console.log(newNumbersWithSpread); //... na diye shudhu numbers dile shey numbers array ta kei newNumbers array te bhorbe

//js e array, object shob reference type
var nums = [1, 2, 3, 4];
var a = nums; //ekhane a er moddhe nums er reference chole jay. So, nums array change korle a array o change hoye jabe.
//2 ta variable(nums,a) e same array ke point kore thakbe.

//ei problem dur korar easy way holo spread operator
var nums2 = [1, 2, 3, 4];
var b = [...nums2]; //ekahne nums2 change korle b change hobe na. b ekta copy toiri hobe. ekta seperate array toiri hobe.
nums2.push(5);
console.log("nums2: " + nums2);
console.log("b: " + b);

//array concat korar jonnou spread operator kaje lage
var nums3 = [1, 2, 3];
var nums4 = [4, 5, 6, 7];
var newNums = [...nums4, ...nums3];
console.log(newNums);

//object er khetreo ek e bhabe spread operator kaj kore
const myObj1 = {
  x: 1,
  y: 2,
};
const myObj2 = {
  a: 1,
  b: 2,
};
const myobj = { ...myObj1, ...myObj2 };
console.log(myobj);
