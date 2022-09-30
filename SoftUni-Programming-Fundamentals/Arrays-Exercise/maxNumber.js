function maxNumber(arr) {
  const inputArr = arr;
  let output = [];

  inputArr.forEach((element, index) => {
    if (index === inputArr.length - 1) {
      output.push(element);
      return;
    }
    let isBigger;
    for (let i = index + 1; i < inputArr.length; i++) {
      if (element > inputArr[i]) {
        isBigger = true;
      } else {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      output.push(element);
    }
  });

  console.log(output.join(' '));
}

maxNumber([1, 4, 3, 2]);
