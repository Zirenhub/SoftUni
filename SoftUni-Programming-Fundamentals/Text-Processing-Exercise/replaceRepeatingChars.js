function replaceRepeatingChars(string) {
  let output = '';
  const stringArr = string.split('');

  stringArr.forEach((string, index) => {
    const check = index + 1;

    if (string !== stringArr[check]) {
      output += string;
    }
  });
  console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
