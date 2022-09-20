function school(input) {
    let pensCost = 5.80;
    let markerCost = 7.20;
    let cleaner = 1.20; // for liter

    let numberOfPens = input[0];
    let numberOfMarkers = input[1];
    let literOfCleaner = input[2];
    let precentOfDiscount = (input[3] / 100);

    let penPrice = numberOfPens * pensCost;
    let markerPrice = numberOfMarkers * markerCost;
    let cleanerPrice = literOfCleaner * cleaner;

    let totalPrice = penPrice + markerPrice + cleanerPrice;
    let discountPrice = totalPrice - (totalPrice * precentOfDiscount);
    console.log(discountPrice);
}

school(["4", "2", "5", "13"]);