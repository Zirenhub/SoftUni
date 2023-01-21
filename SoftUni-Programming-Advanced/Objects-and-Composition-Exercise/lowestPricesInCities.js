function lowestPricesInCities(arr) {
  const output = {};

  arr.forEach((line) => {
    const [town, product, price] = line.split(' | ');

    if (!output.hasOwnProperty(product)) {
      output[product] = { town, price: Number(price), firstOccurance: true };
    } else if (output[product].price > Number(price)) {
      output[product].town = town;
      output[product].price = Number(price);
    } else if (
      output[product].price === price &&
      output[product].firstOccurance
    ) {
      output[product].firstOccurance = false;
    }
  });

  const outputArr = Object.entries(output);

  outputArr.forEach((product) => {
    const [productName, productInfo] = product;
    const { town, price, firstOccurance } = productInfo;

    if (firstOccurance) {
      console.log(`${productName} -> ${price} (${town})`);
    }
  });
}

lowestPricesInCities([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 2',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);
