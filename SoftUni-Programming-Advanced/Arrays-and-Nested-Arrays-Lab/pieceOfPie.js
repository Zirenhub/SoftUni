function pieceOfPie(arr, flavorOne, flavorTwo) {
  const firstIndex = arr.indexOf(flavorOne);
  const secondIndex = arr.indexOf(flavorTwo);

  const output = arr.slice(firstIndex, secondIndex + 1);

  return output;
}

console.log(
  pieceOfPie(
    [
      'Pumpkin Pie',
      'Key Lime Pie',
      'Cherry Pie',
      'Lemon Meringue Pie',
      'Sugar Cream Pie',
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
  )
);

console.log(
  pieceOfPie(
    [
      'Apple Crisp',
      'Mississippi Mud Pie',
      'Pot Pie',
      'Steak and Cheese Pie',
      'Butter Chicken Pie',
      'Smoked Fish Pie',
    ],
    'Pot Pie',
    'Smoked Fish Pie'
  )
);
