import { html } from '../../node_modules/lit-html/lit-html.js';
import { editFruit, getFruit } from '../data/fruits.js';
import { createSubmitHandler } from '../util.js';

const fruitEditTemplate = (
  onSubmit,
  fruit
) => html` <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          .value=${fruit.name}
          placeholder="Fruit Name"
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          .value=${fruit.imageUrl}
          placeholder="Fruit Image URL"
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          .value=${fruit.description}
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          .value=${fruit.nutrition}
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>`;

export async function fruitEditPage(ctx) {
  const { id } = ctx.params;
  const fruit = await getFruit(id);

  async function onSubmit(data) {
    if (Object.values(data).some((f) => f === '')) {
      return alert('All fields should be filled.');
    }

    const res = await editFruit(id, data);
    ctx.page.redirect(`/${res._id}`);
  }

  ctx.render(fruitEditTemplate(createSubmitHandler(onSubmit), fruit));
}
