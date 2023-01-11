function passwordReset(arr) {
  let string = arr.shift();
  let currentLine = arr.shift();

  while (currentLine !== 'Done') {
    const currentCommand = currentLine.split(' ');
    const currentTask = currentCommand[0];

    if (currentTask === 'TakeOdd') {
      const stringArr = string.split('');
      let newString = '';

      stringArr.forEach((char, index) => {
        if (index % 2 !== 0) {
          newString += char;
        }
      });

      string = newString;
      console.log(string);
    }

    if (currentTask === 'Cut') {
      const index = Number(currentCommand[1]);
      const length = Number(currentCommand[2]);

      const subString = string.substring(index, index + length);

      string = string.replace(subString, '');
      console.log(string);
    }

    if (currentTask === 'Substitute') {
      const subString = currentCommand[1];
      const substitute = currentCommand[2];

      if (string.includes(subString)) {
        const pattern = new RegExp(subString, 'g');

        string = string.replace(pattern, substitute);

        console.log(string);
      } else {
        console.log('Nothing to replace!');
      }
    }

    currentLine = arr.shift();
  }

  console.log(`Your password is: ${string}`);
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
