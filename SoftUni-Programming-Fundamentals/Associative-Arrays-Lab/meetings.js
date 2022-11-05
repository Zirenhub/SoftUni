function meetings(arr) {
  const meetingsObj = {};

  arr.forEach((schedule) => {
    const [day, person] = schedule.split(' ');

    if (!meetingsObj[day]) {
      meetingsObj[day] = person;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  });

  const meetingsArr = Object.entries(meetingsObj);

  meetingsArr.forEach((meeting) => {
    const [day, person] = meeting;

    console.log(`${day} -> ${person}`);
  });
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
