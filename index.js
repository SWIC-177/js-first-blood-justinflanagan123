const person = {
  name: "John",
  age: 17,
};

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

const userName = person.name;
const userAge = person.age;

const adultMessage = verifyAdulthood(userName, userAge);

console.log(adultMessage);
