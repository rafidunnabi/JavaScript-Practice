//rest operator
function myFunc(a, ...rest) {
  //...rest parameter must be last in the parameter list
  //...rest operator ekbar e ekta function parameter e use kora jabe
  console.log(a, rest);
}

myFunc(4, 5, 6, 4, 5, 6, 7, 7);
