function partyTime(arrOfGuests) {
  const vipGuests = [];
  const regularGuests = [];

  let currentGuest = arrOfGuests.shift();

  while (currentGuest !== 'PARTY') {
    if (isNaN(currentGuest[0])) {
      regularGuests.push(currentGuest);
    } else {
      vipGuests.push(currentGuest);
    }
    currentGuest = arrOfGuests.shift();
  }

  const allGuests = vipGuests.concat(regularGuests);

  arrOfGuests.forEach((guest) => {
    if (allGuests.includes(guest)) {
      allGuests.splice(allGuests.indexOf(guest), 1);
    }
  });

  console.log(allGuests.length);
  allGuests.forEach((guest) => {
    console.log(guest);
  });
}

partyTime([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);
