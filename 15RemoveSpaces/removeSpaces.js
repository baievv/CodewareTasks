"use strict";
let str=prompt("Enter the string");
alert(remSpaces(str));

function remSpaces(str){
  return str.split(' ').join('');
}

//Simple, remove the spaces from the string, then return the resultant string.