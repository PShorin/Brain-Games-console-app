import { runGame } from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export const runGameEven = () => {
  runGame(description, getQuestionAndAnswer);
};
