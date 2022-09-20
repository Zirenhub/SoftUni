function yardWork(input) {
    let area = input[0];
    let sMeter = 7.61; //with DDS
    let discount = 0.18;
    let price = area * sMeter;
    let discountPrice = price * discount;
    let finalPrice = price - discountPrice;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}

yardWork(["550"]);