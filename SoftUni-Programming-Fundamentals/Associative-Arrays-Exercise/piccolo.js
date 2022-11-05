function piccolo(arr) {
  const parkingLot = [];

  arr.forEach((car) => {
    const [status, plate] = car.split(', ');

    if (status === 'IN') {
      if (parkingLot.includes(plate)) {
        let index = parkingLot.indexOf(plate);
        parkingLot[index] = plate;
      } else {
        parkingLot.push(plate);
      }
    } else if (status === 'OUT') {
      if (parkingLot.includes(plate)) {
        parkingLot.splice(parkingLot.indexOf(plate), 1);
      }
    }
  });

  const sortedLot = parkingLot.sort((a, b) => a.localeCompare(b));

  if (sortedLot.length) {
    sortedLot.forEach((car) => {
      console.log(car);
    });
  } else {
    console.log('Parking Lot is Empty');
  }
}

piccolo([
  'IN, CA2844AA',

  'IN, CA1234TA',

  'OUT, CA2844AA',

  'IN, CA9999TT',

  'IN, CA2866HI',

  'OUT, CA1234TA',

  'IN, CA2844AA',

  'OUT, CA2866HI',

  'IN, CA9876HH',

  'IN, CA2822UU',
]);
