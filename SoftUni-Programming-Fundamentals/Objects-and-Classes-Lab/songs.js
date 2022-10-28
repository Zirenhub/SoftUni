function songs(arr) {
  const arrCopy = arr.slice(0);
  let numberOfSongs = arrCopy.shift();
  const typeOfSongs = arrCopy.pop();

  while (numberOfSongs--) {
    const currentSong = arrCopy.shift().split('_');
    if (currentSong[0] === typeOfSongs || typeOfSongs === 'all') {
      console.log(currentSong[1]);
    }
  }
}

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
