function oldBooks(input) {
  let index = 0;
  let text = input[index];
  index++;
  let book = text;
  let booksChecked = 0;

  while (text !== 'No More Books') {
    text = input[index];
    index++;
    if (text === book) {
      console.log(`You checked ${booksChecked} books and found it.`);
      return;
    }
    booksChecked++;
  }
  console.log('The book you search is not here!');
  console.log(`You checked ${booksChecked - 1} books.`);
}

oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy']);
