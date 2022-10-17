import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const makeProgression = (number, step, length) => {
  const defaultArray = [number];
  let lastNumber = number;
  for (let i = 0; i <= length - 1; i += 1) {
    defaultArray.push(lastNumber + step);
    lastNumber += step;
  }
  return defaultArray;
};

const getQuestionAndAnswer = () => {
  const firstNumberOfProgression = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 10);

  const progression = makeProgression(firstNumberOfProgression, progressionStep, progressionLength);

  const whichNumberUnknown = getRandomNumber(1, progression.length - 1);
  const correctAnswer = progression[whichNumberUnknown];
  progression[whichNumberUnknown] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runGameProgression = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameProgression;
