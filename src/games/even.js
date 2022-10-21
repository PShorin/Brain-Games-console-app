import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberLimitStart = 0;
const numberLimitEnd = 100;

const dividerNumber = 2;
const isEven = (number) => number % dividerNumber === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(numberLimitStart, numberLimitEnd);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGameEven = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameEven;
