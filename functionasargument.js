function greeting(name) {
  return `Hello, ${name}!`;
}

function processName(name, func) {
  return func(name);
}

console.log(processName("Joe", greeting));
