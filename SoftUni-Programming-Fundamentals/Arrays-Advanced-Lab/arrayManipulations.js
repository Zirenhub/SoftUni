function arrayManipulations(arr) {
  let arrGiven = arr[0].split(' ').map(Number);

  for (let i = 1; i < arr.length; i++) {
    const currentLine = arr[i].split(' ');

    const command = currentLine[0];
    const num = Number(currentLine[1]);

    if (command === 'Add') {
      arrGiven.push(num);
    } else if (command === 'Remove') {
      let newArr = arrGiven.filter((x) => x !== num);
      arrGiven = newArr;
    } else if (command === 'RemoveAt') {
      arrGiven.splice(num, 1);
    } else if (command === 'Insert') {
      const index = Number(currentLine[2]);

      arrGiven.splice(index, 0, num);
    }
  }

  console.log(arrGiven.join(' '));
}

arrayManipulations([
  '4 19 2 53 6 43',

  'Add 3',

  'Remove 2',

  'RemoveAt 1',

  'Insert 8 3',
]);
