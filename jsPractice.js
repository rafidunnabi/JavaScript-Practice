var javascript = {
  name: "Javascript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach((i) => {
      console.log(`${this.name} loves ${i}`);
    });
  },
};

javascript.printLibraries();

const searchInput = document.getElementById("search");
const display = document.getElementById("result");
const thanks = document.getElementById("thanks");

function show() {
  display.innerHTML = this.value;
  setTimeout(function () {
    thanks.innerHTML = `You have typed: ${this.value}`;
  }, 1000);
}
searchInput.addEventListener("keyup", () => {
  console.log(this);
  display.innetHTML = this.value;
});

function Person(name) {
  this.name = name;
  console.log(this.name);
}

var sakib = new Person("Sakib");

//Truthy & Falsy

//Falsy: 0, "", null, undefined, NaN
var myVar = null;
if (myVar) {
  console.log("I am truthy");
} else {
  console.log("I am falsy");
}
