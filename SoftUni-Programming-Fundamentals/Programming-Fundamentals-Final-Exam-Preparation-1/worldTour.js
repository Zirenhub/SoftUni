function worldTour(arr) {
  let stops = arr.shift();
  let command = arr.shift();

  while (command !== 'Travel') {
    const arguments = command.split(':');
    const currentTask = arguments[0];

    if (currentTask === 'Add Stop') {
      const index = Number(arguments[1]);
      const stop = arguments[2];

      const stopsLength = stops.length;
      if (index < stopsLength && index >= 0) {
        const newStop =
          stops.substring(0, index) + stop + stops.substring(index);
        stops = newStop;
      }
      console.log(stops);
    }

    if (currentTask === 'Remove Stop') {
      const startIndex = Number(arguments[1]);
      const endIndex = Number(arguments[2]);

      const stopsLength = stops.length;
      if (endIndex < stopsLength && startIndex >= 0) {
        const position = stops.substring(startIndex, endIndex + 1);

        stops = stops.replace(position, '');
      }
      console.log(stops);
    }

    if (currentTask === 'Switch') {
      const oldString = arguments[1];
      const newString = arguments[2];

      if (stops.includes(oldString)) {
        const pattern = new RegExp(oldString, 'g');
        stops = stops.replace(pattern, newString);
      }
      console.log(stops);
    }
    command = arr.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  'Albania:Bulgaria:Cyprus:Deuchland',
  'Add Stop:3:Nigeria',
  'Remove Stop:4:8',
  'Switch:Albania: Azərbaycan',
  'Travel',
]);
console.log('---------------------------------------');
worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
