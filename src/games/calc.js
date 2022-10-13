import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const numberOfMathOperation = getRandomNumber(0, 3);
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 50);
  const number3 = getRandomNumber(2, 5);
  if (numberOfMathOperation === 0) {
    const question = `${number1} + ${number2}`;
    const correctAnswer = number1 + number2;
    return [question, correctAnswer];
  } if (numberOfMathOperation === 1) {
    const question = `${number1} - ${number2}`;
    const correctAnswer = number1 - number2;
    return [question, correctAnswer];
  }
  const question = `${number2} * ${number3}`;
  const correctAnswer = number2 * number3;
  return [question, correctAnswer];
};

const runGameCalc = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameCalc;
