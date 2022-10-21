import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const numberLimitStart = 2;
const numberLimitEnd = 60;

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
  const firstNumber = getRandomNumber(numberLimitStart, numberLimitEnd);
  const secondNumber = getRandomNumber(numberLimitStart, numberLimitEnd);
  const question = `${firstNumber} ${secondNumber} `;
  const maxNumber = Math.max(firstNumber, secondNumber);
  const correctAnswer = gcd(firstNumber, secondNumber, maxNumber);

  return [question, correctAnswer.toString()];
};

const runGameGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameGcd;
