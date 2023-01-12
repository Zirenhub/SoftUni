function roadRadar(speed, area) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const currentSpeedLimit = speedLimits[area];

  if (currentSpeedLimit >= speed) {
    console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
  } else {
    let speedingStatus;
    let difference = speed - currentSpeedLimit;
    if (difference > 40) {
      speedingStatus = 'reckless driving';
    } else if (difference > 20) {
      speedingStatus = 'excessive speeding';
    } else {
      speedingStatus = 'speeding';
    }

    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedingStatus}`
    );
  }
}

roadRadar(40, 'city');
// Driving 40 km/h in a 50 zone
roadRadar(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway');
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
