function matchPhoneNumber(arr) {
  const pattern = /\+359([ -])2\1[\d]{3}\1[\d]{4}/g;

  const phoneList = arr.shift();

  const matches = [...phoneList.matchAll(pattern)];

  let output = [];

  matches.forEach((match) => {
    output.push(match[0]);
  });

  console.log(output.join(', '));
}

matchPhoneNumber([
  '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222',
]);
