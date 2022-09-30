function equalSums(arr) {
  const inputArr = arr;
  let leftSum = 0;
  let rightSum = 0;

  if (inputArr.length <= 1) {
    console.log(0);
    return;
  }

  let valid = false;

  inputArr.forEach((element, index) => {
    for (let i = index + 1; i < inputArr.length; i++) {
      rightSum += inputArr[i];
    }

    if (rightSum === leftSum) {
      console.log(index);
      valid = true;
    } else {
      rightSum = 0;
    }

    leftSum += element;
  });

  if (!valid) {
    console.log('no');
  }
}

equalSums([1]);
