import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchFruit } from '../data/fruits.js';
import { createSubmitHandler } from '../util.js';
import fruitCardTemplate from './fruitCard.js';

const searchTemplate = (
  onSubmit,
  searchResults
) => html` <!-- Search page -->
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit=${onSubmit}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
      ${searchResults && searchResults.length > 0
        ? searchResults.map(fruitCardTemplate)
        : html` <p class="no-result">No result.</p> `}
    </div>
  </section>`;

export function searchPage(ctx) {
  function update(searchResults) {
    ctx.render(
      searchTemplate(createSubmitHandler(onSubmit), searchResults)
    );
  }

  async function onSubmit({ search }) {
    if (!search) {
      return alert('Please fill in the search field.');
    }
    const res = await searchFruit(search);
    update(res);
  }

  update();
}
