function createScoreAdder(score) {
  return (increment) => increment * score;
}

const addOnePoint = createScoreAdder(1);
const addTwoPoints = createScoreAdder(2);
const addThreePoints = createScoreAdder(3);

const addTwoPointsFootball = createScoreAdder(2);
const addThreePointsFootball = createScoreAdder(3);
const addSixPointsFootball = createScoreAdder(6);

console.log("Basketball Scores:");
console.log(addOnePoint(1)); // Output: 1
console.log(addTwoPoints(2)); // Output: 4
console.log(addThreePoints(3)); // Output: 9
