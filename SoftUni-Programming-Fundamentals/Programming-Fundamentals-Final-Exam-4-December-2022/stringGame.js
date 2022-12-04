function stringGame(arr) {
  let string = arr.shift();

  let currentLine = arr.shift();

  while (currentLine !== 'Done') {
    const arguments = currentLine.split(' ');
    const task = arguments[0];

    if (task === 'Change') {
      const char = arguments[1];
      const replacement = arguments[2];

      const pattern = new RegExp(char, 'g');

      string = string.replace(pattern, replacement);
      console.log(string);
    }

    if (task === 'Includes') {
      const subString = arguments[1];

      if (string.includes(subString)) {
        console.log('True');
      } else {
        console.log('False');
      }
    }

    if (task === 'End') {
      const subString = arguments[1];

      if (string.endsWith(subString)) {
        console.log('True');
      } else {
        console.log('False');
      }
    }

    if (task === 'Uppercase') {
      string = string.toUpperCase();

      console.log(string);
    }

    if (task === 'FindIndex') {
      const char = arguments[1];

      console.log(string.indexOf(char));
    }

    if (task === 'Cut') {
      const startIndex = Number(arguments[1]);
      const count = Number(arguments[2]);

      const newString = string.slice(startIndex, startIndex + count);

      console.log(newString);
    }

    currentLine = arr.shift();
  }
}

stringGame([
  '//Th1s 1s my str1ng!//',
  'Change 1 i',
  'Includes string',
  'End my',
  'Uppercase',
  'FindIndex I',
  'Cut 5 5',
  'Done',
]);

stringGame([
  '*S0ftUni is the B3St Plac3**',
  'Change 2 o',
  'Includes best',
  'End is',
  'Uppercase',
  'FindIndex P',
  'Cut 3 7',
  'Done',
]);
