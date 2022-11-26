function thePianist(arr) {
  let numPieces = Number(arr.shift());

  let currentLine = arr.shift();

  const pieces = {};

  while (numPieces--) {
    const [piece, composer, key] = currentLine.split('|');

    pieces[piece] = { composer: composer, key: key };
    currentLine = arr.shift();
  }

  while (currentLine !== 'Stop') {
    const arguments = currentLine.split('|');
    const task = arguments[0];

    if (task === 'Add') {
      const piece = arguments[1];
      const composer = arguments[2];
      const key = arguments[3];

      if (!pieces.hasOwnProperty(piece)) {
        pieces[piece] = { composer: composer, key: key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    }

    if (task === 'Remove') {
      const piece = arguments[1];

      if (!pieces.hasOwnProperty(piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      } else {
        delete pieces[piece];
        console.log(`Successfully removed ${piece}!`);
      }
    }

    if (task === 'ChangeKey') {
      const piece = arguments[1];
      const newKey = arguments[2];

      if (!pieces.hasOwnProperty(piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      } else {
        pieces[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      }
    }
    currentLine = arr.shift();
  }

  const piecesArr = Object.entries(pieces);

  piecesArr.forEach((piece) => {
    const pieceName = piece[0];
    const pieceComposer = piece[1].composer;
    const pieceKey = piece[1].key;

    console.log(`${pieceName} -> Composer: ${pieceComposer}, Key: ${pieceKey}`);
  });
}

thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
