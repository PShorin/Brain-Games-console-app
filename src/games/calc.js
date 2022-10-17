import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const mathSign = ['+', '-', '*'];
  const mathSignInTask = mathSign[getRandomNumber(0, 3)];

  const firstNumberForOperation = getRandomNumber(0, 100);
  const secondNumberForOperation = getRandomNumber(0, 50);
  const extraNumberForDivide = getRandomNumber(2, 5);
  if (mathSignInTask === '+') {
    const question = `${firstNumberForOperation} + ${secondNumberForOperation}`;
    const correctAnswer = firstNumberForOperation + secondNumberForOperation;
    return [question, correctAnswer];
  } if (mathSignInTask === '-') {
    const question = `${firstNumberForOperation} - ${secondNumberForOperation}`;
    const correctAnswer = firstNumberForOperation - secondNumberForOperation;
    return [question, correctAnswer];
  }
  const question = `${secondNumberForOperation} * ${extraNumberForDivide}`;
  const correctAnswer = secondNumberForOperation * extraNumberForDivide;
  return [question, correctAnswer];
};

const runGameCalc = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameCalc;
