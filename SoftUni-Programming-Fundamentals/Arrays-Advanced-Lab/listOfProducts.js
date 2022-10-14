function listOfProducts(arr) {
  // const output = arr.sort((a, b) => a.localeCompare(b));

  // output.forEach((element, index) => {
  //   console.log(`${index + 1}.${element}`);
  // });

  // ^ above is my solution that gets 80/100 from judge, don't know why

  let sorted = arr.sort();

  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
