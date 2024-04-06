const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "62236",
  },
};

const otherPerson = person;

otherPerson.name = "trey";

const zipCode = person.address.zip;

console.log(`Person's name is: ${person.name}`);
console.log(`Other Person's name is: ${otherPerson.name}`);
console.log(`Zip code is: ${zipCode}`);
