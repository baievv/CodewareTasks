"use strict";
// function greet(){
//   return "Hello, world!";
// }
// alert(greet());

function isDivideBy(number, a,b){
  if (number%a===0 && number%b===0){
    return true
  } else return false;
}
alert(isDivideBy(48,2,3));