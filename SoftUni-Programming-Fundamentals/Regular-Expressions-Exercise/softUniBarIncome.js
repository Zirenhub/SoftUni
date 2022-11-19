function softUniBarIncome(customers) {
  const pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[\d]+)\|[^0-9\|$%.]*(?<price>[\d]+\.?[\d]+)\$/g;

  let index = 0;
  let totalIncome = 0;

  while (customers[index] !== 'end of shift') {
    let validCustomer = pattern.exec(customers[index]);

    while (validCustomer) {
      const name = validCustomer.groups.name;
      const product = validCustomer.groups.product;
      const count = Number(validCustomer.groups.count);
      const price = Number(validCustomer.groups.price);
      const totalCost = count * price;

      totalIncome += totalCost;

      console.log(`${name}: ${product} - ${totalCost.toFixed(2)}`);
      validCustomer = pattern.exec(customers[index]);
    }

    index++;
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
  '%George%<Croissant>|2|10.3$',

  '%Peter%<Gum>|1|1.3$',

  '%Maria%<Cola>|1|2.4$',

  'end of shift',
]);
