import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFruits } from '../data/fruits.js';
import fruitCardTemplate from './fruitCard.js';

const fruitsTemplate = (fruits) => html`
  <!-- Dashboard page -->
  <h2>Fruits</h2>

  ${fruits.length > 0
    ? html` <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${fruits.map(fruitCardTemplate)}
      </section>`
    : html` <!-- Display an h2 if there are no posts -->
        <h2>No fruit info yet.</h2>`}
`;

export async function fruitsPage(ctx) {
  const allFruits = await getFruits();

  ctx.render(fruitsTemplate(allFruits));
}
