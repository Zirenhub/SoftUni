function minNumber(input) {
  let index = 0;

  let check = input[index];

  let maxNumber = Number.MAX_SAFE_INTEGER;

  while (check !== 'Stop') {
    if (+check < maxNumber) {
      maxNumber = +check;
    }
    index++;
    check = input[index];
  }
  console.log(`${maxNumber}`);
}

minNumber(['-1', '-2', 'Stop']);
