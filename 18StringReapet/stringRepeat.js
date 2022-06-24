"use strict";
let num=+prompt("Enter the number");
let str=prompt("Enter the string");
stringRepeat(str,num);

function stringRepeat(str, num){
  let str1=str;
  for (let i=1; i<num;i++){
    str+=str1;
  }
  alert(str);
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.