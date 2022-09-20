function shop(input) {
    let dogFood = input[0];
    let catFood = input[1];
    let dogCost = dogFood * 2.50;
    let catCost = catFood * 4;
    let finalCost = (dogCost + catCost);
    console.log(`${finalCost} lv.`);
}

shop(["13", "9"])