function revealWords(replaceWords, sentence) {
  const replaceWordsArr = replaceWords.split(', ');

  replaceWordsArr.forEach((word) => {
    sentence = sentence.replace('*'.repeat(word.length), word);
  });

  console.log(sentence);
}

revealWords(
  'great, learning',

  'softuni is ***** place for ******** new programming languages'
);
