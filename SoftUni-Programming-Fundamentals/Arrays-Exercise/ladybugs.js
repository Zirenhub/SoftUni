function ladybugs(arr) {
  const sizeOfTheFiled = arr[0];
  let initialIndexes = arr[1];
  initialIndexes = initialIndexes.split(' ');

  let commands = [];
  const field = Array(sizeOfTheFiled).fill(0);

  arr.forEach((element, index) => {
    if (index >= 2) {
      commands.push(element);
    }
  });
  initialIndexes.forEach((element) => {
    const position = Number(element);
    if (position > field.length || position < 0) {
      return;
    } else {
      field[position] = '1';
    }
  });

  console.log(commands);
  console.log(field);
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
