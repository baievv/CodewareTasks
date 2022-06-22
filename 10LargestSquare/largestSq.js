"use strict";
let rad=+prompt("Enter the radius");
alert(largestSquare(rad));

function largestSquare(rad){
  return Math.pow(2*rad,2)/2;
}

//Determine the area of the largest square that can fit inside a circle with radius r.