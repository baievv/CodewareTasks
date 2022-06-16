"use strict";
let num=+prompt("Enter the number");
alert('"' + NumberToString(num) + '"');

function NumberToString(num) {
  let str=String(num);
  // console.log(typeof str);
  return str;
}

//We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"