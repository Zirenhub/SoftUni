function mathOperations(numOne, numTwo, operator) {
  const operators = {
    '+': (a, b) => {
      return a + b;
    },
    '-': (a, b) => {
      return a - b;
    },
    '*': (a, b) => {
      return a * b;
    },
    '/': (a, b) => {
      return a / b;
    },
    '%': (a, b) => {
      return a % b;
    },
    '**': (a, b) => {
      return a ** b;
    },
  };

  console.log(operators[operator](numOne, numTwo));
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
