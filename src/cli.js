import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const askName = () => {
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}`);
  return inputName;
};

export default askName;
