function building(input) {
  let totalFloors = Number(input[0]);
  let roomsForOneFloor = Number(input[1]);

  for (let i = totalFloors; i > 0; i--) {
    let buff = '';
    for (let x = 0; x < roomsForOneFloor; x++) {
      if (i === totalFloors) {
        buff += `L${i}${x} `;
      } else if (i % 2 === 0) {
        buff += `O${i}${x} `;
      } else {
        buff += `A${i}${x} `;
      }
    }
    console.log(buff);
  }
}

building(['6', '4']);
