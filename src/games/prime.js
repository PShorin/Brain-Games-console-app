import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 40);
  const isPrime = () => {
    if (question < 2) return false;
    let divider = 2;
    while (divider <= question / 2) {
      if (question % divider === 0) return false;
      divider += 1;
    }
    return true;
  };
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGamePrime = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGamePrime;
