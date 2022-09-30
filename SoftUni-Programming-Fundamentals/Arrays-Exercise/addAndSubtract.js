function addAndSubtract(arr) {
  let originalSum = 0;
  let modifiedSum = 0;
  let modifiedArr = [];

  arr.forEach((element, index) => {
    if (element % 2 === 0) {
      modifiedArr.push(element + index);
      modifiedSum += element + index;
    } else {
      modifiedArr.push(element - index);
      modifiedSum += element - index;
    }
    originalSum += element;
  });

  console.log(modifiedArr);
  console.log(originalSum);
  console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
