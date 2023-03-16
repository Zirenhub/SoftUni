import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';
import getOffer from '../utils/getOffer.js';

async function offerEditPage(ctx, next) {
  const offerEditTemplate = (offer, onSubmit) => html`<main>
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
      <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onSubmit}>
          <input
            type="text"
            name="title"
            id="job-title"
            placeholder="Title"
            .value=${offer.title}
          />
          <input
            type="text"
            name="imageUrl"
            id="job-logo"
            placeholder="Company logo url"
            .value=${offer.imageUrl}
          />
          <input
            type="text"
            name="category"
            id="job-category"
            placeholder="Category"
            .value=${offer.category}
          />
          <textarea
            id="job-description"
            name="description"
            placeholder="Description"
            rows="4"
            cols="50"
            .value=${offer.description}
          ></textarea>
          <textarea
            id="job-requirements"
            name="requirements"
            placeholder="Requirements"
            rows="4"
            cols="50"
            .value=${offer.requirements}
          ></textarea>
          <input
            type="text"
            name="salary"
            id="job-salary"
            placeholder="Salary"
            .value=${offer.salary}
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
  </main> `;

  const offer = await getOffer(ctx.params.offerID);

  function updateOffer(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const {
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary,
    } = Object.fromEntries(formData.entries());

    async function sendUpdate() {
      try {
        const res = await fetch(
          `http://localhost:3030/data/offers/${ctx.params.offerID}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': ctx.auth.accessToken,
            },
            body: JSON.stringify({
              title,
              imageUrl,
              category,
              description,
              requirements,
              salary,
            }),
          }
        );
        const data = await res.json();
        if (res.ok) {
          ctx.setPage(ctx.params.offerID);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        alert(err.message);
      }
    }

    if (
      title &&
      imageUrl &&
      category &&
      description &&
      requirements &&
      salary
    ) {
      sendUpdate();
    }
  }

  render(
    html`
      ${headerTemplate(ctx.auth)}
      ${offerEditTemplate(offer, updateOffer)}
    `,
    ctx.wrapper
  );
}

export default offerEditPage;
