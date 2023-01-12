function timeToWalk(steps, stepLength, speed) {
  const distance = steps * stepLength;
  const speedPerSecond = speed / 3.6;
  const breaks = Math.floor(distance / 500) * 60;
  const totalTime = distance / speedPerSecond + breaks;

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor(totalTime / 60);
  const seconds = Math.round(totalTime % 60);

  console.log(
    `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  );
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
