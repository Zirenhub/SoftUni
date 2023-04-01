import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteFruit, getFruit } from '../data/fruits.js';
import { getUserData } from '../util.js';

const fruitTemplate = (
  fruit,
  user,
  del
) => html` <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
      <p id="details-title">${fruit.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${fruit.nutrition}</p>
        </div>
        ${fruit._ownerId === user._id
          ? html` <div id="action-buttons">
              <a href="/${fruit._id}/edit" id="edit-btn">Edit</a>
              <a
                href="javascript:void(0)"
                @click=${del}
                id="delete-btn"
                >Delete</a
              >
            </div>`
          : null}
      </div>
    </div>
  </section>`;

export async function fruitPage(ctx) {
  const { id } = ctx.params;
  const user = getUserData();
  const fruit = await getFruit(id);

  async function del() {
    const confirmation = confirm('Are you sure?');

    if (confirmation) {
      await deleteFruit(id);
      ctx.page.redirect('/fruits');
    }
  }

  ctx.render(fruitTemplate(fruit, user, del));
}
