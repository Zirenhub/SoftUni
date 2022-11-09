function countStringOccurrences(sentence, word) {
  const wordsInSentence = sentence.split(' ');
  const countOccurrences = wordsInSentence.filter((x) => x === word);

  console.log(countOccurrences.length);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
