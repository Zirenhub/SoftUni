function storage(arr) {
  const itemsObj = {};

  arr.forEach((item) => {
    let [food, quantity] = item.split(' ');

    quantity = Number(quantity);

    if (itemsObj[food]) {
      itemsObj[food] += quantity;
    } else {
      itemsObj[food] = quantity;
    }
  });

  const itemsArr = Object.entries(itemsObj);

  itemsArr.forEach((item) => {
    console.log(`${item[0]} -> ${item[1]}`);
  });
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
