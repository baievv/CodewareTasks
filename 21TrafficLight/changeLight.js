"use strict";
let light=prompt("Enter the color of light");
alert(changeLight(light));

function changeLight(light){
  switch (light){
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default: return "This light havnt in Trffic Light!";
  }
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.