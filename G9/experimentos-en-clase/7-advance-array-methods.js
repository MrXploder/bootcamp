const persons = [
  { name: "Luis", lastName: "Arancibia", age: 27 },
  { name: "Luca", lastName: "Biotti", age: 25 },
  { name: "Romina", lastName: "Pineda", age: 32 },
  { name: "Sebastian", lastName: "Gomez", age: 27 },
];

// Object spread operator / Rest operator =>

// ["Luis", "Luca", "Romina", "Sebastian"]

const names = persons.map((person) => person.name);

console.log(names);

/////////////////////////////////////////////////////////////////

// filtrar mayores de 25
// [ { name: "Luca", lastName: "Biotti", age: 25 } ]

const result = persons.filter((person) => person.age <= 25);

console.log(result);

////////////////////////////////////////

const findedPerson = persons.find((person) => person.age === 27);

console.log({ findedPerson });

////////////////////////////////////////

const resultSome = persons.some((person) => person.age >= 40);

console.log({ resultSome });

/////////////////////////////////////

const resultEvery = persons.every((person) => person.age >= 25);

console.log({ resultEvery });

///////////////////////////////////

const matrix = [
  [1, 1],
  [0, 1],
  [
    [1, 1],
    [0, 1],
  ],
];

// matrix[2][1][1] => 1

//// [1, 1, 0, 1]

const resultFlat = matrix.flat();

console.log({ resultFlat });

////////////////////////////////////////////////

const resultReduceMap = persons.reduce((accumulator, person) => {
  accumulator.push(person.name);
  return accumulator;
}, []);

const resultReduceFilter = persons.reduce((accumulator, person) => {
  if (person.age <= 25) {
    accumulator.push(person);
  }
  return accumulator;
}, []);

const resultReduceFind = persons.reduce((accumulator, person) => {
  if (typeof accumulator !== "undefined" && person.age === 27) {
    accumulator = person;
  }
  return accumulator;
}, undefined);

console.log({ resultReduceMap });
console.log({ resultReduceFilter });
console.log({ resultReduceFind });
