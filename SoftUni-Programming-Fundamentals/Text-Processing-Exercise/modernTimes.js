function modernTimes(sentence) {
  const sentenceArr = sentence.split(' ');

  for (const word of sentenceArr) {
    if (word.length > 1 && word.startsWith('#')) {
      let isValid = true;
      const wordArr = word.split('');
      for (const letter of wordArr) {
        if (!isNaN(letter)) isValid = false;
      }

      if (isValid) {
        console.log(word.substring(1));
      }
    }
  }
}

modernTimes('Nowadays everyone uses # to tag a #speci2al word in #socialMedia');
