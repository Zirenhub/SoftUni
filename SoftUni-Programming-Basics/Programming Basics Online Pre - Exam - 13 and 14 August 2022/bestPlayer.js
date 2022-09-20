function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;

  let bestPlayerName = '';
  let bestPlayerGoal = 0;

  while (command !== 'END') {
    let name = command;
    let goals = Number(input[index]);
    index++;

    if (goals > bestPlayerGoal) {
      bestPlayerName = name;
      bestPlayerGoal = goals;
    }

    if (goals >= 10) {
      break;
    }

    command = input[index];
    index++;
  }

  console.log(`${bestPlayerName} is the best player!`);
  if (bestPlayerGoal >= 3) {
    console.log(
      `He has scored ${bestPlayerGoal} goals and made a hat-trick !!!`
    );
  } else {
    console.log(`He has scored ${bestPlayerGoal} goals.`);
  }
}

bestPlayer(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END']);
