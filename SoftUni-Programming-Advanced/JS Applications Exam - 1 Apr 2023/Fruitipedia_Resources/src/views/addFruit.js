import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../util.js';
import { addFruit } from '../data/fruits.js';

const addFruitTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Fruit Name"
      />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`;

export function addFruitPage(ctx) {
  async function onSubmit(fruit) {
    if (Object.values(fruit).some((f) => f === '')) {
      return alert('All fields should be filled.');
    }

    const res = await addFruit(fruit);
    ctx.page.redirect(`/${res._id}`);
  }

  ctx.render(addFruitTemplate(createSubmitHandler(onSubmit)));
}
