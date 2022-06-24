"use strict";
let mpg=+prompt("Tell your average miles per gallon?");
let fuel=+prompt("How much gallons you have?");
let distance=+prompt("What distance to pump?");
alert(pumpOrNot(mpg,fuel, distance));

function pumpOrNot(num){
  return ((distance-fuel*mpg)<=0)?true:false;
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.