import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';

const offerTemplate = (offer) => html`
  <div class="offer">
    <img src="${offer.imageUrl}" alt="example1" />
    <p>
      <strong>Title: </strong
      ><span class="title">${offer.title}</span>
    </p>
    <p>
      <strong>Salary:</strong
      ><span class="salary">${offer.salary}</span>
    </p>
    <a class="details-btn" href="/${offer._id}">Details</a>
  </div>
`;

async function dashboardPage(ctx) {
  const dashboardTemplate = (offers) => html`
    <main>
      <!-- Dashboard page -->
      <section id="dashboard">
        <h2>Job Offers</h2>

        ${offers !== null && offers.length > 0
          ? html`
              <!-- Display a div with information about every post (if any)-->
              ${offers.map((offer) => offerTemplate(offer))}
            `
          : html`<!-- Display an h2 if there are no posts -->
              <h2>No offers yet.</h2>`}
      </section>
    </main>
  `;

  async function getOffers() {
    try {
      const res = await fetch(
        'http://localhost:3030/data/offers?sortBy=_createdOn%20desc',
        {
          method: 'GET',
        }
      );
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      alert(err.message);
      return null;
    }
  }

  const offers = await getOffers();

  render(
    html` ${headerTemplate(ctx.auth)} ${dashboardTemplate(offers)} `,
    ctx.wrapper
  );
}

export default dashboardPage;
