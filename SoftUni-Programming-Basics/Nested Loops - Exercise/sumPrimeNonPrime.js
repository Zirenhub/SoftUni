function sumPrimeNonPrime(input) {
  let sumPrime = 0;
  let sumNonPrime = 0;

  let index = 0;
  let start = input[index];

  while (start !== 'stop') {
    if (start < 0) {
      console.log('Number is negative.');
      index++;
      start = input[index];
      continue;
    } else {
      start = input[index];
      index++;
    }
    let isPrime = true;
    for (let i = 2; i < start; i++) {
      if (start % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      sumPrime += +start;
    } else {
      sumNonPrime += +start;
    }
    start = input[index];
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(['30', '83', '33', '-1', '20', 'stop']);
