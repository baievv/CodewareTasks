"use strict";
let str=prompt("Enter the string of digit");
alert(fakeBinary(str));

function fakeBinary(str){
  let fake="";
  console.log(str.length);
   for (let i=0;i<str.length;i++){
     fake+=(str[i])<5?0:1;
   }
  return fake;
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string