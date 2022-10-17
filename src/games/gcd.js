import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(2, 60);
  const secondNumber = getRandomNumber(2, 60);
  const question = `${firstNumber} ${secondNumber} `;
  const maxNumber = Math.max(firstNumber, secondNumber);
  let correctAnswer = 1;
  for (let i = 1; i <= (maxNumber / 2); i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  return [question, correctAnswer];
};

const runGameGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameGcd;
