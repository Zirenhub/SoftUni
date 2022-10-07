function charactersInRange(firstChar, secondChar) {
  const firstCharNum = Math.min(
    firstChar.charCodeAt(0),
    secondChar.charCodeAt(0)
  );
  const secondCharNum = Math.max(
    firstChar.charCodeAt(0),
    secondChar.charCodeAt(0)
  );

  let output = '';

  for (let i = firstCharNum + 1; i < secondCharNum; i++) {
    const currentChar = String.fromCharCode(i);

    output += `${currentChar} `;
  }

  console.log(output);
}

charactersInRange('#', ':');
