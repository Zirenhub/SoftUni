function equalArrays(arrOne, arrTwo) {
  let sum = 0;
  let isArrIdentical = true;

  for (let i = 0; i < arrOne.length; i++) {
    let arrOneNum = Number(arrOne[i]);
    let arrTwoNum = Number(arrTwo[i]);

    if (arrOneNum === arrTwoNum) {
      sum += arrOneNum;
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isArrIdentical = false;
      break;
    }
  }

  if (isArrIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(
  ['1', '2', '3', '4', '5'],

  ['1', '2', '4', '4', '5']
);
