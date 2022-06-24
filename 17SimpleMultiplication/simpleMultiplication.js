"use strict";
let num=+prompt("Enter the number");
alert(simpleMult(num));

function simpleMult(num){
  let result=(num%2==0)?num*8:num*9;
  return result;
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.