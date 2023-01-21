function storeCatalogue(arr) {
  const catalog = {};

  // set catalog initials and items
  arr.forEach((product) => {
    const [name, price] = product.split(' : ');
    const initial = name[0];

    if (!catalog.hasOwnProperty(initial)) {
      catalog[initial] = [{ name, price }];
    } else {
      catalog[initial].push({ name, price });
    }
  });

  // sort catalog initals
  const sortedCatalog = Object.keys(catalog)
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, key) => {
      acc[key] = catalog[key];

      return acc;
    }, {});

  // sort catalog items and log them
  for (const item in sortedCatalog) {
    sortedCatalog[item] = sortedCatalog[item].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    console.log(item);
    sortedCatalog[item].forEach((item) => {
      console.log(`  ${item.name}: ${item.price}`);
    });
  }
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
