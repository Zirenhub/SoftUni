function treasureHunt(arr) {
  const arrCopy = arr.slice(0);
  const initialLoot = arrCopy.shift().split('|');

  arrCopy.forEach((command) => {
    const currentCommand = command.split(' ');
    const task = currentCommand[0];

    if (task === 'Loot') {
      for (let i = 1; i < currentCommand.length; i++) {
        const item = currentCommand[i];
        if (!initialLoot.includes(item)) {
          initialLoot.unshift(item);
        }
      }
    }
    if (task === 'Drop') {
      const index = Number(currentCommand[1]);
      if (initialLoot[index]) {
        const removedItem = initialLoot.splice(index, 1);

        initialLoot.push(removedItem[0]);
      }
    }
    if (task === 'Steal') {
      const itemsToRemove = Number(currentCommand[1]);

      if (itemsToRemove > initialLoot.length) {
        const deletedItems = initialLoot.splice(0, initialLoot.length);
        console.log(deletedItems.join(', '));
      } else {
        const deletedItems = initialLoot.splice(-itemsToRemove);
        console.log(deletedItems.join(', '));
      }
    }
  });

  let treasureItemsLength = 0;
  initialLoot.forEach((item) => {
    treasureItemsLength += item.length;
  });
  const averageTreasureGain = treasureItemsLength / initialLoot.length;
  if (initialLoot.length) {
    console.log(
      `Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`
    );
  } else {
    console.log('Failed treasure hunt.');
  }
}

treasureHunt([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
