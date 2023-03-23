import { html } from '../../node_modules/lit-html/lit-html.js';

const bookCardTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}" /></p>
    <a class="button" href="${book._id}">Details</a>
  </li>
`;

export { bookCardTemplate };
