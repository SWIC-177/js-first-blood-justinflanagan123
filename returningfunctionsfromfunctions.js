const person = {
  name: "Justin",
  age: 23,
  isAdult: true,
};

function createwelcome(personal) {
  return (salutation) => `${salutation}, ${personal.name}!`;
}

const greetPerson = createwelcome(person);
console.log(greetPerson("Hey"));
console.log(greetPerson("Have a good day"));

const greetTrey = createwelcome({
  name: "Trey",
  age: 22,
  isAdult: true,
});
console.log(greetTrey("Hello"));
console.log(greetTrey("Good night"));
console.log(greetTrey("Bye"));

function createMultiplier(factor) {
  return (number) => number * factor;
}

const double = createMultiplier(2);
console.log(double(5));
console.log(double(10));

const triple = createMultiplier(3);
console.log(triple(5));
