function operationsBetweenNumbers(input) {
  let numOne = Number(input[0]);
  let numTwo = Number(input[1]);
  let operator = input[2];

  let evenOdd = '';
  let result = 0;

  if (operator === '+') {
    result = numOne + numTwo;
    if (result % 2 === 0) {
      evenOdd = 'even';
    } else {
      evenOdd = 'odd';
    }
    console.log(
      `${numOne} ${operator} ${numTwo} = ${result} - ${evenOdd}`
    );
  } else if (operator === '-') {
    result = numOne - numTwo;
    if (result % 2 === 0) {
      evenOdd = 'even';
    } else {
      evenOdd = 'odd';
    }
    console.log(
      `${numOne} ${operator} ${numTwo} = ${result} - ${evenOdd}`
    );
  } else if (operator === '*') {
    result = numOne * numTwo;
    if (result % 2 === 0) {
      evenOdd = 'even';
    } else {
      evenOdd = 'odd';
    }
    console.log(
      `${numOne} ${operator} ${numTwo} = ${result} - ${evenOdd}`
    );
  } else if (operator === '/') {
    if (numTwo === 0) {
      console.log(`Cannot divide ${numOne} by zero`);
      return;
    }
    result = numOne / numTwo;
    console.log(`${numOne} / ${numTwo} = ${result.toFixed(2)}`);
  } else if (operator === '%') {
    if (numTwo === 0) {
      console.log(`Cannot divide ${numOne} by zero`);
      return;
    }
    result = numOne % numTwo;
    console.log(`${numOne} % ${numTwo} = ${result}`);
  }
}

operationsBetweenNumbers(['112', '0', '/']);
