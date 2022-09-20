function bookList(input) {
    let totalPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);
    let totalHours = totalPages / pages;
    let hoursNeeded = totalHours / days;
    console.log(hoursNeeded);
}

bookList(["432", "15", "4"]);