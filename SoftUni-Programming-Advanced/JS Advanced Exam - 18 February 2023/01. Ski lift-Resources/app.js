window.addEventListener('load', solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const peopleCountInput = document.getElementById('people-count');
  const fromDateInput = document.getElementById('from-date');
  const daysCountInput = document.getElementById('days-count');

  const nextBtn = document.getElementById('next-btn');
  const ticketInfo = document.querySelector('.ticket-info-list');
  const confirmTicket = document.querySelector('.confirm-ticket');

  function createTicket(
    firstName,
    lastName,
    date,
    daysCount,
    peopleCount
  ) {
    const li = document.createElement('li');
    li.classList.add('ticket');
    li.innerHTML = `
      <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${date}</p>
        <p>For ${daysCount} days</p>
        <p>For ${peopleCount} people</p>
      </article>
      <button class='edit-btn'>Edit</button>
      <button class='continue-btn'>Continue</button>
    `;

    return li;
  }

  function ticketPreview(e) {
    e.preventDefault();
    if (
      firstNameInput.value === '' ||
      lastNameInput.value === '' ||
      peopleCountInput.value === '' ||
      fromDateInput.value === '' ||
      daysCountInput.value === ''
    ) {
      return;
    }

    const ticket = createTicket(
      firstNameInput.value,
      lastNameInput.value,
      fromDateInput.value,
      daysCountInput.value,
      peopleCountInput.value
    );

    ticketInfo.appendChild(ticket);
    nextBtn.setAttribute('disabled', true);

    const saveFirstName = firstNameInput.value;
    const saveLastName = lastNameInput.value;
    const savePeopleCount = peopleCountInput.value;
    const saveFromDate = fromDateInput.value;
    const saveDaysCount = daysCountInput.value;

    firstNameInput.value = '';
    lastNameInput.value = '';
    peopleCountInput.value = '';
    fromDateInput.value = '';
    daysCountInput.value = '';

    const editBtn = document.querySelector('.edit-btn');
    const continueBtn = document.querySelector('.continue-btn');

    function editTicket() {
      firstNameInput.value = saveFirstName;
      lastNameInput.value = saveLastName;
      peopleCountInput.value = savePeopleCount;
      fromDateInput.value = saveFromDate;
      daysCountInput.value = saveDaysCount;

      ticketInfo.removeChild(ticket);
      nextBtn.removeAttribute('disabled');
    }

    function finalTicket() {
      ticketInfo.removeChild(ticket);
      ticketInfo.innerHTML = '';
      const confirmBtn = ticket.querySelector('.edit-btn');
      confirmBtn.removeEventListener('click', editTicket);
      const cancelBtn = ticket.querySelector('.continue-btn');
      cancelBtn.removeEventListener('click', finalTicket);
      confirmBtn.textContent = 'Confirm';
      confirmBtn.setAttribute('class', 'confirm-btn');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.setAttribute('class', 'cancel-btn');
      ticket.setAttribute('class', 'ticket-content');

      confirmTicket.appendChild(ticket);

      confirmBtn.addEventListener('click', () => {
        document.getElementById('main').remove();
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'thank-you');
        h1.textContent = 'Thank you, have a nice day!';
        const backBtn = document.createElement('button');
        backBtn.setAttribute('id', 'back-btn');
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', () =>
          window.location.reload()
        );

        document.querySelector('body').appendChild(h1);
        document.querySelector('body').appendChild(backBtn);
      });

      cancelBtn.addEventListener('click', () => {
        confirmTicket.removeChild(ticket);
        nextBtn.removeAttribute('disabled');
      });
    }

    editBtn.addEventListener('click', editTicket);
    continueBtn.addEventListener('click', finalTicket);
  }

  nextBtn.addEventListener('click', ticketPreview);
}
