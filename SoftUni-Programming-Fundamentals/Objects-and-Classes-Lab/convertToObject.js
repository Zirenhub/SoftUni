function convertToObject(rawJson) {
  const parseJson = JSON.parse(rawJson);
  const objToArr = Object.entries(parseJson);

  objToArr.forEach((line) => {
    console.log(line.join(': '));
  });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
