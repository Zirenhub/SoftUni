function swimming(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let swimOneMeterInSeconds = Number(input[2]);

  let distanceNeededToSwim = distanceInMeters * swimOneMeterInSeconds;
  let slowed = Math.floor(distanceInMeters / 15) * 12.5;
  let totalTime = distanceNeededToSwim + slowed;

  if (recordInSeconds <= totalTime) {
    let secondsNeeed = totalTime - recordInSeconds;
    console.log(
      `No, he failed! He was ${secondsNeeed.toFixed(
        2
      )} seconds slower.`
    );
  } else if (recordInSeconds >= totalTime) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  }
}

swimming(['10464', '1500', '20']);
