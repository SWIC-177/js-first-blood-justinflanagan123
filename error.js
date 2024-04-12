const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

function renameOdds(peopleArray) {
  const modifiedPeople = [];

  for (let i = 0; i < peopleArray.length; i += 1) {
    const person = { ...peopleArray[i] };

    if (person.id % 2 !== 0) {
      person.name = "Odd Name";
    }

    modifiedPeople[i] = person;
  }

  return modifiedPeople;
}

const modifiedPeople = renameOdds(people);

console.log("Original people array:", people);
console.log("Modified people array:", modifiedPeople);
