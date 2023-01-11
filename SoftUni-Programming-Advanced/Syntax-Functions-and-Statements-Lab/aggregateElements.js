function aggregateElements(arr) {
  let sumOfAll = 0;
  let sumOfInverse = 0;
  let concatString = '';

  function sumAll() {
    sumOfAll = arr.reduce((acc, current) => acc + current, 0);
  }

  function sumInverse() {
    sumOfInverse = arr.reduce((acc, current) => acc + 1 / current, 0);
  }

  function concatArr() {
    arr.forEach((num) => {
      const str = num.toString();
      concatString += str;
    });
  }
  // of course could be done a lot shorter :p
  sumAll();
  sumInverse();
  concatArr();

  console.log(sumOfAll);
  console.log(sumOfInverse);
  console.log(concatString);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
