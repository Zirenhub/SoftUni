function furniture(shopArr) {
  const pattern =
    />>(?<product>[A-Z][A-z]+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/g;

  let index = 0;
  let totalCost = 0;

  console.log('Bought furniture:');

  while (shopArr[index] !== 'Purchase') {
    let product = shopArr[index];
    let validProduct = pattern.exec(product);

    while (validProduct) {
      console.log(validProduct.groups.product);
      const price = Number(validProduct.groups.price);
      const quantity = Number(validProduct.groups.quantity);
      totalCost += price * quantity;

      validProduct = pattern.exec(product);
    }

    index++;
  }
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture([
  '>>Laptop<<312.2323!3',

  '>>TV<<300.21314!5',

  '>Invalid<<!5',

  '>>TV<<300.21314!20',

  '>>Invalid<!5',

  '>>TV<<30.21314!5',

  '>>Invalid<<!!5',

  'Purchase',
]);
