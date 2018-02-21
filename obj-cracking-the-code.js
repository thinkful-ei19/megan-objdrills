'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decoder(sentence){
  let codeCracker = [];
  let words = sentence.split(' ');
  
  for (let i =0; i<words.length; i++){
    if(Object.keys(cipher).find(key => key===words[i][0])){
      let letter= words[i][0];
      codeCracker.push(words[i][cipher[letter]-1]);
    }
    else {
        codeCracker.push(' ');
    }
  }
  console.log(codeCracker.join(''));
}

decoder('craft block argon meter bells brown croon droop');






//if(Object.keys(cipher).find(key => key===words[i][0]))