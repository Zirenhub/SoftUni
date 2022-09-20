function repainting(input) {
    let naylonCost = 1.50; // for square meter
    let paintCost = 14.50; // for liter
    let paintThinnerCost = 5; // for liter
    let bags = 0.40;

    let naylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinnerNeeded = Number(input[2]);
    let hours = Number(input[3]);

    let naylonPrice = (naylonNeeded + 2) * naylonCost;
    let paintPrice = (paintNeeded + (paintNeeded * 0.10)) * paintCost;
    let thinnerPrice = thinnerNeeded * paintThinnerCost;

    let finalPrice = naylonPrice + paintPrice + thinnerPrice + bags;
    let workersFee = (finalPrice * 0.30) * hours;
    let finalSum = finalPrice + workersFee;
    console.log(finalSum);
}

repainting(["10", "11", "4", "8"]);