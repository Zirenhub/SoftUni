function moving(input) {
  let index = 0;
  let widthFreeSpace = Number(input[index]);
  index++;
  let lengthFreeSpace = Number(input[index]);
  index++;
  let heightFreeSpace = Number(input[index]);
  index++;

  let totalFreeSpace =
    widthFreeSpace * lengthFreeSpace * heightFreeSpace;

  let start = input[index];

  let totalBoxes = 0;

  while (start !== 'Done') {
    if (totalFreeSpace - totalBoxes < 0) {
      let total = totalFreeSpace - totalBoxes;
      console.log(
        `No more free space! You need ${Math.abs(
          total
        )} Cubic meters more.`
      );
      return;
    }
    totalBoxes = totalBoxes + +start;
    index++;
    start = input[index];
  }
  let total = totalFreeSpace - totalBoxes;
  console.log(`${total} Cubic meters left.`);
}

moving(['10', '10', '2', '20', '20', '20', '20', '122']);
