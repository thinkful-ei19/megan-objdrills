'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
  else: ' '
};

function decode(sentence){
  let codeCracker = [];
  let words = sentence.split(' ');
  
  for (let i =0; i<words.length; i++){
    if(Object.keys(cipher).find(key => key===words[i][0])){
      let letter= words[i][0];
      codeCracker.push(words[i][cipher[letter]-1]);
    }
    else {
      codeCracker.push(cipher.else);
    }
  }
  //console.log(codeCracker.join(''));
  return codeCracker.join('');
}

//decode('craft block argon meter bells brown croon droop');
const decodedWords= decode('craft block argon meter bells brown croon droop');

console.log(decodedWords);
