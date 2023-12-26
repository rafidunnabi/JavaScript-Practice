// var age = 9;
// var type = age >= 18 ? "adult" : age < 10 ? "child" : "young";
// console.log(type);

function hello() {
  console.log(this);
  const obj = {
    value: 10,
    person: function Person() {
      console.log(this);
    },
    human: () => {
      console.log(this);
      return;
    },
  };
  obj.person();
  obj.human();
}

hello();
