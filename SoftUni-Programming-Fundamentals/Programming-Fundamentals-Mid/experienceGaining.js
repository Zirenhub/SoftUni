function experienceGaining(arr) {
  const arrCopy = arr.slice();

  const experienceNeeded = arrCopy.shift();
  let countOfBattles = arrCopy.shift();

  let experienceSum = 0;
  let day = 0;

  let experienceCollected = false;
  let battlesSoFar = 0;

  arrCopy.some((battle) => {
    day += 1;

    battlesSoFar += 1;

    experienceSum += battle;

    if (day % 3 === 0) {
      experienceSum += battle * 0.15;
    }
    if (day % 5 === 0) {
      experienceSum -= battle * 0.1;
    }
    if (day % 15 === 0) {
      experienceSum += battle * 0.05;
    }
    if (experienceSum >= experienceNeeded) {
      experienceCollected = true;
      return true;
    }
  });

  if (experienceCollected) {
    console.log(
      `Player successfully collected his needed experience for ${battlesSoFar} battles.`
    );
  } else {
    const neededExperience = experienceNeeded - experienceSum;
    console.log(
      `Player was not able to collect the needed experience, ${neededExperience.toFixed(
        2
      )} more needed.`
    );
  }
}

experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
