function oddOccurrences(string) {
  const arrFromString = string.split(' ').map((x) => x.toLowerCase());

  const occurrencesObj = {};

  arrFromString.forEach((string) => {
    if (occurrencesObj.hasOwnProperty(string)) {
      occurrencesObj[string] += 1;
    } else {
      occurrencesObj[string] = 1;
    }
  });

  const arrOccurrences = Object.entries(occurrencesObj).sort(
    (a, b) => b[1] - a[1]
  );
  let outputString = '';

  arrOccurrences.forEach((word) => {
    const currentWord = word[0];
    const occurrence = word[1];

    if (occurrence % 2 !== 0) {
      outputString += `${currentWord} `;
    }
  });

  console.log(outputString);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
