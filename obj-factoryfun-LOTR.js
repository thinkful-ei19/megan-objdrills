'use strict';

function createCharacter (name, nickName, race, origin, attack, defence){
  return{
    name,
    nickName,
    race,
    origin,
    attack,
    defence,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character) {
      let dmgToYou = 0;
      let dmgToMe = 0;
      if (this.attack>character.defence){
        dmgToYou = this.attack-character.defence;
      }
      if(this.defence<character.attack){
        dmgToMe = character.attack - this.defence;
      }
      console.log(`Your opponent takes ${dmgToYou} damage and you receive ${dmgToMe} damage.`);

    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
];

//Add new character:
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'She-Elf', 'Rivendell', 9, 9));

//Find Aragorn:
console.log(characters.find(obj => obj.nickName === 'aragorn').describe());

//filter to only Hobbits:
console.log(characters.filter(obj => obj.race === 'Hobbit'));

//filter to only attacks above 5:
console.log(characters.filter(obj => obj.attack >= 5));


//Note to self: Would I use 'new' to add a weapon to each character and change describe?