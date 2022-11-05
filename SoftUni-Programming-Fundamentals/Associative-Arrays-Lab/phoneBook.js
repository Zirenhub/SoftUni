function phoneBook(arr) {
  const output = {};

  arr.forEach((element) => {
    const currentEntry = element.split(' ');

    output[currentEntry[0]] = currentEntry[1];
  });

  const outputArr = Object.entries(output);

  outputArr.forEach((phone) => {
    console.log(`${phone[0]} -> ${phone[1]}`);
  });
}

phoneBook([
  'Tim 0834212554',

  'Peter 0877547887',

  'Bill 0896543112',

  'Tim 0876566344',
]);
