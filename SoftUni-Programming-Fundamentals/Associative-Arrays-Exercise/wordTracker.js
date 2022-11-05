function wordTracker(arr) {
  const occurrencesObj = {};

  const searchingFor = arr.shift().split(' ');

  searchingFor.forEach((word) => {
    occurrencesObj[word] = 0;
  });

  arr.forEach((word) => {
    if (occurrencesObj.hasOwnProperty(word)) {
      occurrencesObj[word] += 1;
    }
  });

  const sortedOccurrences = Object.entries(occurrencesObj).sort(
    (a, b) => b[1] - a[1]
  );

  sortedOccurrences.forEach((word) => {
    console.log(`${word[0]} - ${word[1]}`);
  });
}

wordTracker([
  'this sentence',

  'In',
  'this',
  'sentence',
  'you',
  'have',

  'to',
  'count',
  'the',
  'occurrences',
  'of',

  'the',
  'words',
  'this',
  'and',
  'sentence',

  'because',
  'this',
  'is',
  'your',
  'task',
]);
