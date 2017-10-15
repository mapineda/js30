// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'Ares';
// let name2 = name;
// console.log(name, name2);
// name = 'Zorro';
// console.log(name, name2);

const players = ['ares', 'dragon', 'meghan', 'shennanigan'];
const team = players;
//console.log(players, team);

const team2 = players.slice();
team2[3] = 'poppy';
// console.log(team2, players);

const team3 = [...players];
// console.log(team3, players);

const team4 = Array.from(players);
team4[2] = 'blahh';
// console.log(team4, players);

const person = {
  name: 'Ares',
  age: 10
}

// const captain = person;
// captain.number = 99
// console.log(captain);

const cap2 = Object.assign({}, person, {number: 99, age:12  });
// console.log(cap2, person);
