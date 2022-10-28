function convertToJSON(firstName, lastName, hairColor) {
  const output = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  const outputToJson = JSON.stringify(output);

  console.log(outputToJson);
}

convertToJSON(
  'George',
  'Jones',

  'Brown'
);
