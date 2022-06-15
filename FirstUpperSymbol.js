"use strict";
const word=prompt('Enter the word');
alert(capitalizeWord(word));

function capitalizeWord(word) {
  let str=word[0].toUpperCase()+word.slice(1);
  console.log(str);
  return str;
}
