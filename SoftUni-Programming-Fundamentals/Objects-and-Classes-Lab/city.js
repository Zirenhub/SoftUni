function city(obj) {
  const output = Object.entries(obj);

  output.forEach((line) => {
    console.log(line.join(' -> '));
  });
}

city({
  name: 'Plovdiv',

  area: 389,

  population: 1162358,

  country: 'Bulgaria',

  postCode: '4000',
});
