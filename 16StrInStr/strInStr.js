"use strict";
let str1=prompt("Enter the string1");
let str2=prompt("Enter the string2");
alert(strInStr(str1,str2));

function strInStr(str1,str2){
  return (str1.substring(str1.length-str2.length)==str2)?true:false; 
}

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).