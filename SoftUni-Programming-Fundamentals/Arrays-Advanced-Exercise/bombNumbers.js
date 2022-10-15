function bombNumbers(numsArr, specialNumArr) {
  let arrCopy = numsArr.splice(0);
  const power = specialNumArr[1];
  let specialNumber = specialNumArr[0];

  while (arrCopy.includes(specialNumber)) {
    let index = arrCopy.indexOf(specialNumber);
    let elementsToRemove = power * 2 + 1;
    let startIndex = index - power;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }
    arrCopy.splice(startIndex, elementsToRemove);
  }

  console.log(arrCopy.reduce((prev, current) => prev + current, 0));
}

bombNumbers(
  [
    1, 2, 2, 4, 2, 2,

    2, 9,
  ],

  [4, 2]
);

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);

bombNumbers(
  [1, 7, 7, 1, 2, 3],

  [7, 1]
);

bombNumbers(
  [
    1, 1, 2, 1, 1, 1,

    2, 1, 1, 1,
  ],

  [2, 1]
);
