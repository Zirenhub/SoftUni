import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';

function createOfferPage(ctx, next) {
  const createOfferTemplate = (
    onSubmit
  ) => html` <!-- Create Page (Only for logged-in users) -->
    <main>
      <section id="create">
        <div class="form">
          <h2>Create Offer</h2>
          <form class="create-form" @submit=${onSubmit}>
            <input
              type="text"
              name="title"
              id="job-title"
              placeholder="Title"
            />
            <input
              type="text"
              name="imageUrl"
              id="job-logo"
              placeholder="Company logo url"
            />
            <input
              type="text"
              name="category"
              id="job-category"
              placeholder="Category"
            />
            <textarea
              id="job-description"
              name="description"
              placeholder="Description"
              rows="4"
              cols="50"
            ></textarea>
            <textarea
              id="job-requirements"
              name="requirements"
              placeholder="Requirements"
              rows="4"
              cols="50"
            ></textarea>
            <input
              type="text"
              name="salary"
              id="job-salary"
              placeholder="Salary"
            />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
    </main>`;

  function submitOffer(e) {
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

    async function sendOffer() {
      try {
        if (!title) {
          throw new Error('Title is empty');
        }
        if (!imageUrl) {
          throw new Error('Image Url is empty');
        }
        if (!category) {
          throw new Error('Catergory is empty');
        }
        if (!description) {
          throw new Error('Description is empty');
        }
        if (!requirements) {
          throw new Error('Requirements is empty');
        }
        if (!salary) {
          throw new Error('Salary is empty');
        }
        const res = await fetch('http://localhost:3030/data/offers', {
          method: 'POST',
          body: JSON.stringify({
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary,
          }),
          headers: {
            'X-Authorization': ctx.auth.accessToken,
          },
        });
        const data = await res.json();
        if (res.ok) {
          ctx.setPage('dashboard');
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        alert(err.message);
      }
    }
    sendOffer();
  }

  render(
    html`
      ${headerTemplate(ctx.auth)} ${createOfferTemplate(submitOffer)}
    `,
    ctx.wrapper
  );
}

export default createOfferPage;
