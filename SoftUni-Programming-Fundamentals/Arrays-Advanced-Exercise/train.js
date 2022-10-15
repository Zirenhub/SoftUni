function train(arr) {
  const wagons = arr.shift().split(' ').map(Number);
  const maxCapacity = Number(arr.shift());

  const arrLength = arr.length;

  for (let b = 0; b < arrLength; b++) {
    const currentLine = arr[b].split(' ');

    if (currentLine[0] === 'Add') {
      wagons.push(Number(currentLine[1]));
    } else {
      for (let k = 0; k < wagons.length; k++) {
        let passengers = wagons[k];
        if (passengers + Number(currentLine[0]) <= maxCapacity) {
          wagons[k] += Number(currentLine[0]);
          break;
        }
      }
    }
  }

  console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
