function gramophone(bandName, album, song) {
  //   albumName.length * bandName.length * song - name.length / 2;

  const bandLength = bandName.length;
  const albumLength = album.length;
  const songLength = song.length;

  const result = (albumLength * bandLength * songLength) / 2;
  const rotations = Math.ceil(result / 2.5);

  console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
