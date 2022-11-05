function addressBook(arr) {
  const addressObj = {};

  arr.forEach((entry) => {
    const [person, address] = entry.split(':');

    addressObj[person] = address;
  });

  const addressArr = Object.entries(addressObj);
  const sortedArr = addressArr.sort((kvpA, kvpB) =>
    kvpA[0].localeCompare(kvpB[0])
  );
  sortedArr.forEach((address) => {
    console.log(`${address[0]} -> ${address[1]}`);
  });
}

addressBook([
  'Bob:Huxley Rd',

  'John:Milwaukee Crossing',

  'Peter:Fordem Ave',

  'Bob:Redwing Ave',

  'George:Mesta Crossing',

  'Ted:Gateway Way',

  'Bill:Gateway Way',

  'John:Grover Rd',

  'Peter:Huxley Rd',

  'Jeff:Gateway Way',

  'Jeff:Huxley Rd',
]);
