function cinemaTickets(input) {
  let index = 0;
  let movieTitle = input[index];
  index++;
  let freeSpace = Number(input[index]);
  index++;
  let command = input[index];

  let totalTickets = 0;
  let totalTicketsBuff = 0;

  let studentTicket = 0;
  let standardTicket = 0;
  let kidTicket = 0;

  let percentFull = 0;

  while (command !== 'Finish') {
    // console.log(command);

    if (command === 'student') {
      studentTicket++;
      totalTickets++;
    } else if (command === 'standard') {
      standardTicket++;
      totalTickets++;
    } else if (command === 'kid') {
      kidTicket++;
      totalTickets++;
    }

    percentFull = (100 * totalTickets) / freeSpace;

    index++;
    command = input[index];

    if (command === 'End') {
      console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);
      totalTicketsBuff += totalTickets;
      totalTickets = 0;
      index++;
      movieTitle = input[index];
      index++;
      freeSpace = input[index];
      continue;
    } else if (command === 'Finish') {
      totalTicketsBuff += totalTickets;
      console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);
      console.log(`Total tickets: ${totalTicketsBuff}`);
      let studentPercent = (100 * studentTicket) / totalTicketsBuff;
      let standardPercent = (100 * standardTicket) / totalTicketsBuff;
      let kidPercent = (100 * kidTicket) / totalTicketsBuff;
      console.log(`${studentPercent.toFixed(2)}% student tickets.`);
      console.log(`${standardPercent.toFixed(2)}% standard tickets`);
      console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
      return;
    }
  }
}

cinemaTickets([
  'The Matrix',

  '20',

  'student',

  'standard',

  'kid',

  'kid',

  'student',

  'student',

  'standard',

  'student',

  'End',

  'The Green Mile',

  '17',

  'student',

  'standard',

  'standard',

  'student',

  'standard',

  'student',

  'End',

  'Amadeus',

  '3',

  'standard',

  'standard',

  'standard',

  'Finish',
]);
