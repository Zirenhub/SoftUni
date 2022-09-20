function basketballEquipment(input) {
    let tax = Number(input[0]);

    let sneakers = tax - (tax * 0.40);
    let equipment = sneakers - (sneakers * 0.20);
    let ball = equipment / 4;
    let accessories = ball / 5;

    let sum = tax + sneakers + equipment + ball + accessories;
    console.log(sum);
}

basketballEquipment(["550"]);