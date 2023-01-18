function assemblyLine() {
  return {
    hasClima(obj) {
      obj.temp = 21;
      obj.tempSettings = 21;
      obj.adjustTemp = () => {
        if (obj.temp === obj.tempSettings) {
          return;
        }
        obj.temp < obj.tempSettings ? (obj.temp += 1) : (obj.temp -= 1);
      };
    },
    hasAudio(obj) {
      obj.currentTrack = { name: null, artist: null };
      obj.nowPlaying = () => {
        if (obj.currentTrack === null) {
          return;
        }
        console.log(
          `Now playing ${obj.currentTrack.name} by ${obj.currentTrack.artist}`
        );
      };
    },
    hasParktronic(obj) {
      obj.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log('Beep! Beep! Beep!');
          return;
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log('Beep! Beep!');
          return;
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log('Beep!');
          return;
        }

        console.log('');
      };
    },
  };
}

const line = assemblyLine();
const myCar = {
  make: 'Toyota',
  model: 'Avensis',
};

line.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

line.hasAudio(myCar);
myCar.currentTrack = {
  name: 'Never Gonna Give You Up',
  artist: 'Rick Astley',
};
myCar.nowPlaying();

line.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.table(myCar);
