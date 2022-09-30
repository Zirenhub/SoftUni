function reverseAnArrayOfNumbers(num, arr) {
  let oldArr = arr;
  let newLength = num;
  let newArr = [];

  while (newArr.length !== newLength) {
    newArr.push(oldArr[newArr.length]);
  }
  newArr.reverse();
  let result = '';

  newArr.forEach((num) => {
    result += `${num} `;
  });

  console.log(result);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
