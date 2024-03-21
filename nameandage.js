const name = "Justin";
const age = 23;

function verifyAdulthood(name, age) {
  if (age >= 18) {
    return `Welcome, ${name}!`;
  } else {
    return `You are not old enough to enter, ${name},`;
  }
}

console.log(verifyAdulthood(name, age));
