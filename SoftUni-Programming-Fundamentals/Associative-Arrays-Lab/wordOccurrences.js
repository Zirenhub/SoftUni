function wordOccurrences(arr) {
  const wordCounter = {};

  arr.forEach((word) => {
    if (wordCounter[word]) {
      wordCounter[word] += 1;
    } else {
      wordCounter[word] = 1;
    }
  });

  const sortedCounter = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);

  sortedCounter.forEach((word) => {
    console.log(`${word[0]} -> ${word[1]} times`);
  });
}

wordOccurrences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',

  'Here',
  'is',
  'another',
  'sentence',
  'And',

  'finally',
  'the',
  'third',
  'sentence',
]);
