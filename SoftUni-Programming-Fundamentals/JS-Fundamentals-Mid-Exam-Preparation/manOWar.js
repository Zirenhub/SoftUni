function manOWar(arr) {
  const arrCopy = arr.slice(0);
  const statusOfPirateShip = arrCopy.shift().split('>').map(Number);
  const statusOfWarship = arrCopy.shift().split('>').map(Number);
  const maximumHealthCapacity = Number(arrCopy.shift());

  let isStalemate = false;

  arrCopy.some((command) => {
    const currentCommand = command.split(' ');
    const task = currentCommand[0];
    if (task === 'Retire') return true;

    if (task === 'Fire') {
      const index = Number(currentCommand[1]);
      const damage = Number(currentCommand[2]);

      if (statusOfWarship[index] && index >= 0) {
        statusOfWarship[index] -= damage;

        if (statusOfWarship[index] <= 0) {
          console.log('You won! The enemy ship has sunken.');
          isStalemate = true;
          return true;
        }
      }
    }
    if (task === 'Defend') {
      const startIndex = Number(currentCommand[1]);
      const endIndex = Number(currentCommand[2]);
      const damage = Number(currentCommand[3]);

      if (
        statusOfPirateShip[startIndex] &&
        statusOfPirateShip[endIndex] &&
        startIndex >= 0 &&
        endIndex >= 0
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          statusOfPirateShip[i] -= damage;
          if (statusOfPirateShip[i] <= 0) {
            console.log('You lost! The pirate ship has sunken.');
            isStalemate = true;
            return true;
          }
        }
      }
    }
    if (task === 'Repair') {
      const index = Number(currentCommand[1]);
      const health = Number(currentCommand[2]);

      if (statusOfPirateShip[index] && index >= 0) {
        statusOfPirateShip[index] += health;

        if (statusOfPirateShip[index] > maximumHealthCapacity) {
          statusOfPirateShip[index] = maximumHealthCapacity;
        }
      }
    }
    if (task === 'Status') {
      let sectionsNeedRepairing = 0;
      const percentage = maximumHealthCapacity * 0.2;

      statusOfPirateShip.forEach((section) => {
        if (section < percentage) sectionsNeedRepairing += 1;
      });
      console.log(`${sectionsNeedRepairing} sections need repair.`);
    }
  });

  if (!isStalemate) {
    let pirateShipSum = 0;
    let warshipSum = 0;

    statusOfPirateShip.forEach((section) => {
      pirateShipSum += section;
    });

    statusOfWarship.forEach((section) => {
      warshipSum += section;
    });

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
  }
}

manOWar([
  '2>3>4>5>2',
  '6>7>8>9>10>11',
  '20',
  'Status',
  'Fire 2 3',
  'Defend 0 4 11',
  'Repair 3 18',
  'Retire',
]);

manOWar([
  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire 2 11',
  'Fire 8 100',
  'Defend 3 6 11',
  'Defend 0 3 5',
  'Repair 1 33',
  'Status',
  'Retire',
]);
