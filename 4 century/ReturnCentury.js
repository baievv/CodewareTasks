"use strict";
let year=+prompt("Enter the year");
alert("Now is "+ returnCentury(year) +"th century!");

function returnCentury(year) {
  let years=year-(Math.trunc(year/100))*100;
  console.log(Math.trunc(year/100));
  let century=(years==0)?Math.trunc(year/100):Math.trunc(year/100)+1;
  return century;
}

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20