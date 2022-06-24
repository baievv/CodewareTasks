"use strict";
let exam=+prompt("Enter exam result");
let proj=+prompt("Number of competed projects");
alert(finalGrade(exam,proj));

function finalGrade(exam,proj){
  let result=0;
  let x=(exam>90&&proj>10)?true:false;
  console.log(x);
  if (exam>90&&proj>10){
    result=100;
  } else {
    if (exam>75&&proj>4){
      result=90;
    } else{
      if (exam>50&& proj>1) {
        result=75;
      } else result=0;
    } 
  }
  return result;
}

//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases