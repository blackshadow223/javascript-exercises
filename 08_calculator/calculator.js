const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (array) {
  return array.reduce((value, number) => (value + number), 0);
};

const multiply = function (array) {
  return array.reduce((value, number) => (value * number), 1);
};

const power = function (firstNumber, secondNumber) {
  return firstNumber ** secondNumber;
};

const factorial = function (number) {
  let value = 1;
  for (let i = 1; i <= number; ++i) {
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
