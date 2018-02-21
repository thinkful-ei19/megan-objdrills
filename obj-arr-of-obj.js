'use strict';


let obj1 = {
  name: 'Kevin',
  jobTitle: 'Restaurant Manager'
};

let obj2 = {
  name: 'Rodney',
  jobTitle: 'Musician'
};

let obj3 = {
  name: 'Sean',
  jobTitle: 'Hotel Manager'
};

let jobArray = [obj1, obj2, obj3];

//console.log(jobArray);
//just checking it puts them into an array and it does!

jobArray.forEach(obj => console.log(obj));

//or

jobArray.forEach(obj => console.log(`His/Her name is ${obj.name} and their job title is ${obj.jobTitle}`));