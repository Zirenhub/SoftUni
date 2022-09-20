function maxNumber(input) {
  let index = 0;

  let check = input[index];

  let minNumber = Number.MIN_SAFE_INTEGER;

  while (check !== 'Stop') {
    if (+check > minNumber) {
      minNumber = +check;
    }
    index++;
    check = input[index];
  }
  console.log(`${minNumber}`);
}

maxNumber(['-1', '-2', 'Stop']);
