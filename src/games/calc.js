import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const mathSign = ['+', '-', '*'];

const calculate = (x, y, sign) => {
  switch (sign) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Error');
  }
};

const getQuestionAndAnswer = () => {
  const mathSignInTask = mathSign[getRandomNumber(0, mathSign.length)];

  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 20);

  const correctAnswer = calculate(firstNumber, secondNumber, mathSignInTask);
  const question = `${firstNumber} ${mathSignInTask} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

const runGameCalc = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameCalc;
