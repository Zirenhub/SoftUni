function commonElements(arrOne, arrTwo) {
  arrOne.forEach((element) => {
    if (arrTwo.includes(element)) {
      console.log(element);
    }
  });
}

commonElements(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

  ['s', 'o', 'c', 'i', 'a', 'l']
);
