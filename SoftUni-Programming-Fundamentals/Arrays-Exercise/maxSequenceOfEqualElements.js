function maxSequenceOfEqualElements(arr) {
  let outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    const tempArr = [];

    tempArr.push(currentNum);
    for (let b = i + 1; b < arr.length; b++) {
      let nextNum = arr[b];

      if (currentNum === nextNum) {
        tempArr.push(nextNum);
      } else {
        break;
      }
    }

    if (tempArr.length > outputArr.length) {
      outputArr = [];
      tempArr.forEach((num) => {
        outputArr.push(num);
      });
    }
  }

  console.log(outputArr.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
