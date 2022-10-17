import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const numberToDefine = getRandomNumber(0, 40);
  const question = numberToDefine;
  const isPrime = () => {
    if (numberToDefine < 2) return false;
    let divider = 2;
    while (divider <= numberToDefine / 2) {
      if (numberToDefine % divider === 0) return false;
      divider += 1;
    }
    return true;
  };
  const correctAnswer = isPrime(numberToDefine) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGamePrime = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGamePrime;
