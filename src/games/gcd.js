import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(2, 60);
  const number2 = getRandomNumber(2, 60);
  const question = `${number1} ${number2} `;
  const maxNumber = Math.max(number1, number2);
  let correctAnswer = 1;
  for (let i = 1; i <= (maxNumber / 2); i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = i;
    }
  }
  return [question, correctAnswer];
};

const runGameGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameGcd;
