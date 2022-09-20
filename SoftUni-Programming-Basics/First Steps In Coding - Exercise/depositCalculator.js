function calculator(input) {
    let deposit = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearly = Number(input[2]);
    let interest = deposit * (yearly / 100);
    let intRateForMonth = interest / 12;
    let finalRes = deposit + depositPeriod * intRateForMonth;
    console.log(finalRes);
}

calculator(["200", "3", "5.7"]);