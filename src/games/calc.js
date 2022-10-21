import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const mathSign = ['+', '-', '*'];
const numberLimitStart = 0;
const numberBigLimitEnd = 50;
const numberSmallLimitEnd = 20;

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
  const firstNumber = getRandomNumber(numberLimitStart, numberBigLimitEnd);
  const secondNumber = getRandomNumber(numberLimitStart, numberSmallLimitEnd);

  const correctAnswer = calculate(firstNumber, secondNumber, mathSignInTask);
  const question = `${firstNumber} ${mathSignInTask} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

const runGameCalc = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameCalc;
