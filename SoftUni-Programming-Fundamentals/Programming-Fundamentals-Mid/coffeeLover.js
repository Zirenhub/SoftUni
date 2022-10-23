function coffeeLover(arr) {
  const arrCopy = arr.slice();

  let coffeeInStock = arrCopy.shift().split(' ');

  arrCopy.forEach((command) => {
    const currentCommand = command.split(' ');
    const task = currentCommand[0];

    if (task === 'Include') {
      coffeeInStock.push(currentCommand[1]);
    }
    if (task === 'Remove') {
      const firstLast = currentCommand[1];
      const nItemsToRemove = Number(currentCommand[2]);

      if (nItemsToRemove <= coffeeInStock.length) {
        if (firstLast === 'first') {
          coffeeInStock.splice(0, nItemsToRemove);
        } else if (firstLast === 'last') {
          coffeeInStock.splice(-nItemsToRemove);
        }
      }
    }
    if (task === 'Prefer') {
      const coffeeIndex = Number(currentCommand[1]);
      const coffeeIndexTwo = Number(currentCommand[2]);

      if (coffeeInStock[coffeeIndex] && coffeeInStock[coffeeIndexTwo]) {
        let temp = coffeeInStock[coffeeIndex];
        coffeeInStock[coffeeIndex] = coffeeInStock[coffeeIndexTwo];
        coffeeInStock[coffeeIndexTwo] = temp;
      }
    }
    if (task === 'Reverse') {
      coffeeInStock.reverse();
    }
  });

  console.log('Coffees:');
  console.log(coffeeInStock.join(' '));
}

coffeeLover([
  'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
  '5',
  'Include TurkishCoffee',
  'Remove first 2',
  'Remove last 1',
  'Prefer 3 1',
  'Reverse',
]);

coffeeLover([
  'Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee',
  '5',
  'Include OrdinaryCoffee',
  'Remove first 1',
  'Prefer 0 1',
  'Prefer 3 1',
  'Reverse',
]);
coffeeLover([
  'Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica',
  '3',
  'Include OrdinaryCoffee',
  'Remove first 1',
  'Prefer 4 1',
]);
