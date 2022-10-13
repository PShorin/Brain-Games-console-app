import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const defaultNumber = getRandomNumber(0, 40);
  const question = defaultNumber;
  const isPrime = () => {
    if (defaultNumber < 2) return false;
    let divider = 2;
    while (divider <= defaultNumber / 2) {
      if (defaultNumber % divider === 0) return false;
      divider += 1;
    }
    return true;
  };
  const correctAnswer = isPrime(defaultNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGamePrime = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGamePrime;
