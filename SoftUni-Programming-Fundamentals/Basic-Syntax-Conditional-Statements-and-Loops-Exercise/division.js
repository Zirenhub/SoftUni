function division(num) {
  let numDivided = 0;

  if (num % 10 === 0) {
    numDivided = 10;
  } else if (num % 7 === 0) {
    numDivided = 7;
  } else if (num % 6 === 0) {
    numDivided = 6;
  } else if (num % 3 === 0) {
    numDivided = 3;
  } else if (num % 2 === 0) {
    numDivided = 2;
  } else {
    console.log('Not divisible');
    return;
  }

  console.log(`The number is divisible by ${numDivided}`);
}

division(1643);
