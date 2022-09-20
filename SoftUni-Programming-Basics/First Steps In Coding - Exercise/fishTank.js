function fishTank(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);

    let volume = l * w * h;
    let volumeInLiter = volume / 1000;
    let occupiedArea = 1 - (percent / 100) // 1 - 0.17
    let litersNeeded = volumeInLiter * occupiedArea;
    console.log(litersNeeded);

}

fishTank(["85", "75", "47", "17"]);