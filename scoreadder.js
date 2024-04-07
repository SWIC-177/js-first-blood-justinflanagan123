function createScoreAdder(score) {
  return (increment) => increment * score;
}

const addOnePoint = createScoreAdder(1);
const addTwoPoints = createScoreAdder(2);
const addThreePoints = createScoreAdder(3);
