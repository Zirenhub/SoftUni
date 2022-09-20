function hotelRoom(input) {
  let month = input[0];
  let daysStaying = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  if (month === 'May' || month === 'October') {
    studioPrice = 50 * daysStaying; //per night
    apartmentPrice = 65 * daysStaying; //per night
    if (daysStaying > 7 && daysStaying <= 14) {
      studioPrice = studioPrice - studioPrice * 0.05;
    } else if (daysStaying > 14) {
      studioPrice = studioPrice - studioPrice * 0.3;
    }
  } else if (month === 'June' || month === 'September') {
    studioPrice = 75.2 * daysStaying; //per night
    apartmentPrice = 68.7 * daysStaying; //per night
    if (daysStaying > 14) {
      studioPrice = studioPrice - studioPrice * 0.2;
    }
  } else if (month === 'July' || month === 'August') {
    studioPrice = 76 * daysStaying; //per night
    apartmentPrice = 77 * daysStaying; //per night
  }
  if (daysStaying > 14) {
    apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(['June', '14']);
