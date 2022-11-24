function emojiDetector(arr) {
  const text = arr.shift();

  const digitsPattern = /[\d]/g;
  const emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

  const coolThreshold = text
    .match(digitsPattern)
    .map(Number)
    .reduce((acc, cur) => acc * cur);

  console.log(`Cool threshold: ${coolThreshold}`);

  const matchEmojis = text.matchAll(emojiPattern);

  let emojisCount = 0;
  const coolEmojis = [];

  for (const emoji of matchEmojis) {
    emojisCount += 1;
    const emojiSyntax = emoji[0];
    const emojiName = emoji.groups.emoji;
    let emojiCoolenss = 0;

    for (let i = 0; i < emojiName.length; i++) {
      const letterValue = emojiName.charCodeAt(i);
      emojiCoolenss += letterValue;
    }
    if (emojiCoolenss > coolThreshold) {
      coolEmojis.push(emojiSyntax);
    }
  }

  console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
  coolEmojis.forEach((emoji) => {
    console.log(emoji);
  });
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
