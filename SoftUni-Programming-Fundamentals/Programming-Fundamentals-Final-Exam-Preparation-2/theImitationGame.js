function theImitationGame(arr) {
  let message = arr.shift();
  let currentCommand = arr.shift();

  while (currentCommand !== 'Decode') {
    const arguments = currentCommand.split('|');
    const task = arguments[0];

    if (task === 'Move') {
      const lettersNum = Number(arguments[1]);

      const getSubstr = message.substring(0, lettersNum);
      message = message.replace(getSubstr, '');
      message = message += getSubstr;
    }

    if (task === 'Insert') {
      const index = Number(arguments[1]);
      const value = arguments[2];

      const messageArr = message.split('');
      messageArr.splice(index, 0, value);

      message = messageArr.join('');
    }

    if (task === 'ChangeAll') {
      const substr = arguments[1];
      const replacement = arguments[2];

      while (message.includes(substr)) {
        message = message.replace(substr, replacement);
      }
    }

    currentCommand = arr.shift();
  }

  console.log(`The decrypted message is: ${message}`);
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
