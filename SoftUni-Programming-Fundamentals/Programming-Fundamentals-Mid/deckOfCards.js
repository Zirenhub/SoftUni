function deckOfCards(arr) {
  const arrCopy = arr.slice();

  const listOfCards = arrCopy.shift().split(', ');
  const num = Number(arrCopy.shift());

  arrCopy.forEach((command) => {
    const currentCommand = command.split(', ');
    const task = currentCommand[0];

    if (task === 'Add') {
      const cardName = currentCommand[1];

      if (!listOfCards.includes(cardName)) {
        listOfCards.push(cardName);
        console.log('Card successfully added');
      } else {
        console.log('Card is already in the deck');
      }
    }
    if (task === 'Remove') {
      const cardName = currentCommand[1];

      if (listOfCards.includes(cardName)) {
        const indexOfCard = listOfCards.indexOf(cardName);
        listOfCards.splice(indexOfCard, 1);
        console.log('Card successfully removed');
      } else {
        console.log('Card not found');
      }
    }
    if (task === 'Remove At') {
      const index = Number(currentCommand[1]);

      if (listOfCards[index]) {
        listOfCards.splice(index, 1);
        console.log('Card successfully removed');
      } else {
        console.log('Index out of range');
      }
    }
    if (task === 'Insert') {
      const index = Number(currentCommand[1]);
      const cardName = currentCommand[2];

      if (listOfCards[index]) {
        if (!listOfCards.includes(cardName)) {
          listOfCards.splice(index, 0, cardName);
          console.log('Card successfully added');
        } else {
          console.log('Card is already added');
        }
      } else {
        console.log('Index out of range');
      }
    }
  });

  console.log(listOfCards.join(', '));
}

deckOfCards([
  'Ace of Diamonds, Queen of Hearts, King of Clubs',
  '3',
  'Add, King of Diamonds',
  'Insert, 2, Jack of Spades',
  'Remove, Ace of Diamonds',
]);
