"use strict";
let num=+prompt("Enter the number");
alert(switchIt(num));

function switchIt(num){
  switch (num){
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 0:
      return "Zero";
    default: return "Your number more than 9!"
  }
  
}

//When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.