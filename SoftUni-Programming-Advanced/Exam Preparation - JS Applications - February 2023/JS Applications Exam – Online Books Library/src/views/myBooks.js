import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../data/books.js';
import { getUserData } from '../util.js';
import { bookCardTemplate } from './bookCard.js';

const myBooksTemplate = (books) => html`
  <!-- My Books Page ( Only for logged-in users ) -->
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length > 0
      ? html`
          <ul class="my-books-list">
            ${books.map(bookCardTemplate)}
          </ul>
        `
      : html`<p class="no-books">No books in database!</p>`}
  </section>
`;

export async function myBooksPage(ctx) {
  const user = getUserData();
  const books = await getMyBooks(user._id);

  ctx.render(myBooksTemplate(books));
}
