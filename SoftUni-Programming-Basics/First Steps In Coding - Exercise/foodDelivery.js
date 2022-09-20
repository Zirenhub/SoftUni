function foodDelivery(input) {
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegetarianMenu = 8.15;
    let deliveryPrice = 2.50;

    let numberOfChickenMenu = input[0];
    let numberOfFishMenu = input[1];
    let numberOfVegetarianMenu = input[2];

    let priceOfChickenMenu = numberOfChickenMenu * chickenMenu;
    let priceOfFishMenu = numberOfFishMenu * fishMenu;
    let priceOfVegetarianMenu = numberOfVegetarianMenu * vegetarianMenu;
    let priceOfAllMenu = priceOfChickenMenu + priceOfFishMenu + priceOfVegetarianMenu;

    let desertPrice = priceOfAllMenu * 0.20;

    let sum = priceOfAllMenu + desertPrice + deliveryPrice;
    console.log(sum);
}

foodDelivery(["2", "4", "3"]);