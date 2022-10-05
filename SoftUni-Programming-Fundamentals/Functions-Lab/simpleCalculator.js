function simpleCalculator(numOne, numTwo, operator) {
  if (operator === 'multiply') {
    console.log(`${numOne * numTwo}`);
  } else if (operator === 'divide') {
    console.log(`${numOne / numTwo}`);
  } else if (operator === 'add') {
    console.log(`${numOne + numTwo}`);
  } else {
    console.log(`${numOne - numTwo}`);
  }
}

simpleCalculator(
  50,

  13,

  'subtract'
);
