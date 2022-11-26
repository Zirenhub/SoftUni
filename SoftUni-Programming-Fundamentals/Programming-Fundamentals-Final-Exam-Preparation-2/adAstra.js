function adAstra(arr) {
  const text = arr.shift();
  const pattern =
    /([\|#])(?<foodName>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/gm;

  const allMatches = text.matchAll(pattern);

  const foods = [];
  let totalCalories = 0;

  for (const item of allMatches) {
    const foodName = item.groups.foodName;
    const expDate = item.groups.expDate;
    const cal = Number(item.groups.cal);
    if (cal > 10000) {
      continue;
    }

    totalCalories += cal;
    let currentFood = `Item: ${foodName}, Best before: ${expDate}, Nutrition: ${cal}`;
    foods.push(currentFood);
  }

  const days = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${days} days!`);

  foods.forEach((food) => console.log(food));
}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
