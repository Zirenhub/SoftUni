function activationKeys(arr) {
  let key = arr.shift();

  let index = arr.shift();

  while (index !== 'Generate') {
    const arguments = index.split('>>>');
    const task = arguments[0];

    if (task === 'Contains') {
      const keyword = arguments[1];
      if (key.includes(keyword)) {
        console.log(`${key} contains ${keyword}`);
      } else {
        console.log('Substring not found!');
      }
    }

    if (task === 'Flip') {
      const argument = arguments[1];
      const startIndex = arguments[2];
      const endIndex = arguments[3];

      const substring = key.substring(startIndex, endIndex);

      const modifiedSubstring =
        argument === 'Upper'
          ? substring.toUpperCase()
          : substring.toLowerCase();

      key = key.replace(substring, modifiedSubstring);
      console.log(key);
    }

    if (task === 'Slice') {
      const startIndex = arguments[1];
      const endIndex = arguments[2];

      key = key.substring(0, startIndex) + key.substring(endIndex);

      console.log(key);
    }

    index = arr.shift();
  }

  console.log(`Your activation key is: ${key}`);
}

activationKeys([
  'abcdefghijklmnopqrstuvwxyz',

  'Slice>>>2>>>6',

  'Flip>>>Upper>>>3>>>14',

  'Flip>>>Lower>>>5>>>7',

  'Contains>>>def',

  'Contains>>>deF',

  'Generate',
]);
