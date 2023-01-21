function townsToJSON(arr) {
  const output = [];

  for (let i = 1; i < arr.length; i++) {
    const townInfo = arr[i].split('|');
    // remove leftover empty space
    townInfo.shift();
    townInfo.pop();

    const name = townInfo[0].trim();
    const latitude = Number(townInfo[1]).toFixed(2).trim();
    const longitude = Number(townInfo[2]).toFixed(2).trim();
    output.push({
      Town: name,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    });
  }

  console.log(JSON.stringify(output));
}

townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |',
]);
