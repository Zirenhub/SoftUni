function lunchBreak(input) {
  let filmTitle = input[0];
  let filmDuration = Number(input[1]);
  let breakDuration = Number(input[2]);

  let timeForLunch = (breakDuration * 1) / 8;
  let timeForRelaxing = (breakDuration * 1) / 4;
  let totalTime = breakDuration - timeForLunch - timeForRelaxing;
  let timeLeft = totalTime - filmDuration;
  let timeNeeded = filmDuration - totalTime;

  if (filmDuration <= totalTime) {
    console.log(
      `You have enough time to watch ${filmTitle} and left with ${Math.ceil(
        timeLeft
      )} minutes free time.`
    );
  } else if (filmDuration >= totalTime) {
    console.log(
      `You don't have enough time to watch ${filmTitle}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}

lunchBreak(['Teen Wolf', '48', '60']);
