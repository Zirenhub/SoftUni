import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';
import getOffer from '../utils/getOffer.js';

async function offerDetails(ctx, next) {
  const detailsTemplate = (offer) => html`
    <main>
      <!-- Details page -->
      <section id="details">
        <div id="details-wrapper">
          <img
            id="details-img"
            src=${offer.imageUrl}
            alt="example1"
          />
          <p id="details-title">${offer.title}</p>
          <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
          </p>
          <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
          </p>
          <div id="info-wrapper">
            <div id="details-description">
              <h4>Description</h4>
              <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
              <h4>Requirements</h4>
              <span>${offer.requirements}</span>
            </div>
          </div>
          <p>Applications: <strong id="applications">1</strong></p>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${ctx.auth._id === offer._ownerId
              ? html`<a href="/${offer._id}/edit" id="edit-btn"
                    >Edit</a
                  >
                  <a href="/${offer._id}/delete" id="delete-btn"
                    >Delete</a
                  >`
              : ctx.auth
              ? html`<!--Bonus - Only for logged-in users ( not authors )-->
                  <a href="" id="apply-btn">Apply</a>`
              : null}
          </div>
        </div>
      </section>
    </main>
  `;

  const offer = await getOffer(ctx.params.offerID);

  render(
    html` ${headerTemplate(ctx.auth)} ${detailsTemplate(offer)} `,
    ctx.wrapper
  );
}

export default offerDetails;
