function movingTarget(arr) {
  const arrCopy = arr.slice();
  const targets = arrCopy.shift().split(' ').map(Number);

  arrCopy.forEach((command) => {
    const currentCommand = command.split(' ');

    const task = currentCommand[0];
    const taskIndex = Number(currentCommand[1]);

    const targetExist = typeof targets[taskIndex] !== 'undefined';

    if (task === 'Shoot') {
      if (targetExist) {
        const power = Number(currentCommand[2]);
        targets[taskIndex] -= power;
        if (targets[taskIndex] <= 0) {
          targets.splice(taskIndex, 1);
        }
      }
    }
    if (task === 'Add') {
      if (targetExist) {
        const insertValue = Number(currentCommand[2]);
        targets.splice(taskIndex, 0, insertValue);
      } else {
        console.log('Invalid placement!');
      }
    }
    if (task === 'Strike') {
      const radius = Number(currentCommand[2]);
      const startIndex = taskIndex - radius;
      let targetsToRemove = radius * 2 + 1;

      if (startIndex >= 0 && typeof targets[targetsToRemove] !== 'undefined') {
        targets.splice(startIndex, targetsToRemove);
      } else {
        console.log('Strike missed!');
      }
    }
  });

  console.log(targets.join('|'));
}

movingTarget([
  '52 74 23 44 96 110',

  'Shoot 5 10',

  'Shoot 1 80',

  'Strike 2 1',

  'Add 22 3',

  'End',
]);
movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);

// .at is not supported by the Judge system

// function movingTarget(arr) {
//   const arrCopy = arr.slice();
//   const targets = arrCopy.shift().split(' ').map(Number);

//   arrCopy.forEach((command) => {
//     const currentCommand = command.split(' ');

//     const task = currentCommand[0];
//     const taskIndex = Number(currentCommand[1]);

//     const targetExist = targets.at(taskIndex);

//     if (task === 'Shoot') {
//       if (targetExist) {
//         const power = Number(currentCommand[2]);
//         targets[taskIndex] -= power;
//         if (targets[taskIndex] <= 0) {
//           targets.splice(taskIndex, 1);
//         }
//       }
//     }
//     if (task === 'Add') {
//       if (targetExist) {
//         const insertValue = Number(currentCommand[2]);
//         targets.splice(taskIndex, 0, insertValue);
//       } else {
//         console.log('Invalid placement!');
//       }
//     }
//     if (task === 'Strike') {
//       const radius = Number(currentCommand[2]);
//       const startIndex = taskIndex - radius;
//       let targetsToRemove = radius * 2 + 1;

//       if (startIndex >= 0 && targets.at(targetsToRemove)) {
//         targets.splice(startIndex, targetsToRemove);
//       } else {
//         console.log('Strike missed!');
//       }
//     }
//   });

//   console.log(targets.join('|'));
// }
