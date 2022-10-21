import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y, max) => {
  let maxDevider;
  for (let i = 1; i <= max; i += 1) {
    if (x % i === 0 && y % i === 0) {
      maxDevider = i;
    }
  }
  return maxDevider;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(2, 60);
  const secondNumber = getRandomNumber(2, 60);
  const question = `${firstNumber} ${secondNumber} `;
  const maxNumber = Math.max(firstNumber, secondNumber);
  const correctAnswer = gcd(firstNumber, secondNumber, maxNumber);

  return [question, correctAnswer.toString()];
};

const runGameGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameGcd;
