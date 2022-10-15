function houseParty(arr) {
  const list = [];

  arr.forEach((element) => {
    const command = element.split(' ');

    if (!command.includes('not')) {
      if (!list.includes(command[0])) {
        list.push(command[0]);
      } else {
        console.log(`${command[0]} is already in the list!`);
      }
    } else {
      if (list.includes(command[0])) {
        let findPerson = list.indexOf(command[0]);
        list.splice(findPerson, 1);
      } else {
        console.log(`${command[0]} is not in the list!`);
      }
    }
  });

  console.log(list.join('\n'));
}

houseParty([
  'Allie is going!',

  'George is going!',

  'John is not going!',

  'George is not going!',
]);
