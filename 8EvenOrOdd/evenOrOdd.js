"use strict";
let num=+prompt("Enter the number");
evenOrOdd(num);

function evenOrOdd(num){
  let message=(num%2==0)?"Четное!":"Нечетное!";
  alert(message);
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.