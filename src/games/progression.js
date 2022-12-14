import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const numberLimitStart = 1;
const numberLimitEnd = 50;
const progressionLimitEnd = 15;
const lengthLimitStart = 5;
const lengthLimitEnd = 10;

const makeProgression = (number, step, length) => {
  const arrayWithResult = [];
  for (let i = 0; i < length; i += 1) {
    arrayWithResult.push(number + (step * i));
  }
  return arrayWithResult;
};

const getQuestionAndAnswer = () => {
  const firstNumberOfProgression = getRandomNumber(numberLimitStart, numberLimitEnd);
  const progressionStep = getRandomNumber(numberLimitStart, progressionLimitEnd);
  const progressionLength = getRandomNumber(lengthLimitStart, lengthLimitEnd);

  const progression = makeProgression(firstNumberOfProgression, progressionStep, progressionLength);

  const whichNumberUnknown = getRandomNumber(1, progression.length - 1);
  const correctAnswer = progression[whichNumberUnknown];
  progression[whichNumberUnknown] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

const runGameProgression = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameProgression;
