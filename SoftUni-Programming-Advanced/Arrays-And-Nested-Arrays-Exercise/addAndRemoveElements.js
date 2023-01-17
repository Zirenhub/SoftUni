function addAndRemoveElements(arr) {
  const output = [];

  let counter = 1;

  arr.forEach((command) => {
    if (command === 'add') {
      output.push(counter);
      counter++;
    } else if (command === 'remove') {
      output.pop();
      counter++;
    }
  });

  if (output.length) {
    return output.join('\n');
  } else {
    return 'Empty';
  }
}

console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemoveElements(['remove', 'remove', 'remove']));
