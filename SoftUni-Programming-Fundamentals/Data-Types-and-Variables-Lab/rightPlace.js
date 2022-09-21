function rightPlace(stringOne, char, stringTwo) {
  const filledString = stringOne.replace('_', char);

  if (filledString === stringTwo) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}

rightPlace(
  'Str_ng',
  'i',

  'String'
);
