function sumFirstLast(arr) {
  const firstNum = Number(arr.shift());
  const lastNum = Number(arr.pop());

  if (firstNum && lastNum) {
    return firstNum + lastNum;
  } else {
    return firstNum ? firstNum + firstNum : lastNum + lastNum;
  }
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
