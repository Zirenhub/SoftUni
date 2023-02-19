function dungeonestDark(arr) {
  const map = arr[0];

  const rooms = map.split('|');

  let health = 100;
  let coins = 0;

  for (let i = 0; i < rooms.length; i++) {
    const currentRoom = rooms[i].split(' ');
    const value = Number(currentRoom[1]);

    if (currentRoom[0] === 'potion') {
      if (health + value <= 100) {
        health += value;
        console.log(`You healed for ${value} hp.`);
      } else {
        let c = 0;
        for (let j = health; j < 100; j++) {
          c += 1;
        }
        console.log(`You healed for ${c} hp.`);
        health = 100;
      }
      console.log(`Current health: ${health} hp.`);
    } else if (currentRoom[0] === 'chest') {
      console.log(`You found ${value} coins.`);
      coins += value;
    } else {
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${currentRoom[0]}.`);
      } else {
        console.log(`You died! Killed by ${currentRoom[0]}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }

    if (i + 1 === rooms.length) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
