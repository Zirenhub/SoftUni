function shoppinggroceries(arr) {
  const arrCopy = arr.slice(0);
  const groceries = arrCopy.shift().split('!');

  arrCopy.forEach((command) => {
    const currentCommand = command.split(' ');

    const task = currentCommand[0];
    const item = currentCommand[1];

    const findItem = groceries.indexOf(item);

    if (task === 'Urgent') {
      if (findItem === -1) {
        groceries.unshift(item);
      }
    }
    if (task === 'Unnecessary') {
      if (findItem !== -1) {
        groceries.splice(findItem, 1);
      }
    }
    if (task === 'Correct') {
      if (findItem !== -1) {
        const newItem = currentCommand[2];
        groceries.splice(findItem, 1, newItem);
      }
    }
    if (task === 'Rearrange') {
      if (findItem !== -1) {
        const removedItem = groceries.splice(findItem, 1);
        groceries.push(removedItem);
      }
    }
  });

  console.log(groceries.join(', '));
}

shoppinggroceries([
  'Milk!Pepper!Salt!Water!Banana',

  'Urgent Salt',

  'Unnecessary Grapes',

  'Correct Pepper Onion',
  'Rearrange Grapes',
  'Correct Tomatoes Potatoes',
  'Go Shopping!',
]);
