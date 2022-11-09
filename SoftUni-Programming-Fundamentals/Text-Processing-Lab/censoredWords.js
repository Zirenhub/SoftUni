function censoredWords(sentence, censorWord) {
  let output = sentence;
  while (output.includes(censorWord)) {
    output = output.replace(censorWord, '*'.repeat(censorWord.length));
  }

  console.log(output);
}

censoredWords('A small sentence with some words', 'small');
