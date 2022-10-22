import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const numberLimitStart = 2;
const numberLimitEnd = 60;

const findGcd = (x, y) => {
  for (let i = Math.max(x, y); i >= 1; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return x;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(numberLimitStart, numberLimitEnd);
  const secondNumber = getRandomNumber(numberLimitStart, numberLimitEnd);
  const question = `${firstNumber} ${secondNumber} `;
  const correctAnswer = findGcd(firstNumber, secondNumber);

  return [question, correctAnswer.toString()];
};

const runGameGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameGcd;
