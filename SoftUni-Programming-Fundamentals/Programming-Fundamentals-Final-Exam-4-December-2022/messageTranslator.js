function messageTranslator(arr) {
  let countInputs = Number(arr.shift());

  while (countInputs--) {
    const currentString = arr.shift();

    const pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[A-Za-z]{8,})\]/gm;

    const match = pattern.exec(currentString);

    if (match !== null) {
      const string = match.groups.text;
      const command = match.groups.command;
      const stringArr = string.split('');
      const asciiArr = stringArr.map((x) => {
        return x.charCodeAt();
      });
      let output = `${command}: `;

      asciiArr.forEach((n) => {
        output += `${n} `;
      });

      console.log(output);
    } else {
      console.log('The message is invalid');
    }
  }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready']);
messageTranslator([
  '3',
  'go:[outside]',
  '!drive!:YourCarToACarWash',
  '!Watch!:[LordofTheRings]',
]);
