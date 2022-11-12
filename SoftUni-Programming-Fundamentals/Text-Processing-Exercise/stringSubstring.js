function stringSubstring(word, text) {
  const textArr = text.split(' ');
  const lowerCaseText = textArr.map((x) => x.toLowerCase());
  const lowerCaseword = word.toLowerCase();

  if (lowerCaseText.includes(lowerCaseword)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

stringSubstring('python', 'JavaScript is the best programming language');
