function condenseArrayToNumber(arr) {
  let array = arr;

  while (array.length > 1) {
    let condensed = Array(array.length - 1);
    for (let i = 0; i < array.length - 1; i++) {
      condensed[i] = Number(array[i]) + Number(array[i + 1]);
    }
    array = condensed;
  }
  console.log(array[0]);
}

condenseArrayToNumber([2, 10, 3]);
