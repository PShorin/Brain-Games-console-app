import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberLimitStart = 2;
const numberLimitEnd = 40;

const isPrime = (number) => {
  if (number < 2) return false;
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) return false;
    divider += 1;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const numberToCheck = getRandomNumber(numberLimitStart, numberLimitEnd);
  const question = numberToCheck;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGamePrime = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGamePrime;
