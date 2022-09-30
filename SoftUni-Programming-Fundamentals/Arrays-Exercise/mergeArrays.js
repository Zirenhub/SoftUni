function mergeArrays(arrOne, arrTwo) {
  let output = [];

  arrOne.forEach((element, index) => {
    if (index % 2 === 0) {
      output.push(Number(element) + Number(arrTwo[index]));
    } else {
      output.push(element + arrTwo[index]);
    }
  });

  console.log(output.join(' - '));
}

mergeArrays(
  ['5', '15', '23', '56', '35'],

  ['17', '22', '87', '36', '11']
);
