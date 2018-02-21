'use strict';


let obj1 = {
  name: 'Kevin',
  jobTitle: 'Restaurant Manager'
};

let obj2 = {
  name: 'Rodney',
  jobTitle: 'Musician',
  boss: 'Kevin'
};

let obj3 = {
  name: 'Sean',
  jobTitle: 'Worker',
  boss: 'Kevin'
};

let jobArray = [obj1, obj2, obj3];

jobArray.forEach(obj => {
  if (!obj.boss){
    console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
  }
  else{
    console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`);}
});


