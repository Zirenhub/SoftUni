import { html } from '../../node_modules/lit-html/lit-html.js';
import {
  deleteBook,
  getBook,
  getLikes,
  getUserLike,
  likeBook,
} from '../data/books.js';
import { getUserData } from '../util.js';

const detailsTemplate = (book, isOwner, user, del, like) => html`
  <!-- Details Page ( for Guests and Users ) -->
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src="${book.imageUrl}" /></p>
      <div class="actions">
        ${isOwner
          ? html`<!-- Edit/Delete buttons ( Only for creator of this book )  -->
              <a class="button" href="/${book._id}/edit">Edit</a>
              <a
                class="button"
                href="javascript:void(0)"
                @click=${del}
                >Delete</a
              >`
          : null}

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${!isOwner && user && !book.isLiked
          ? html`<a
              class="button"
              @click=${like}
              href="javascript:void(0)"
              >Like</a
            >`
          : null}

        <!-- ( for Guests and Users )  -->
        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${book.likes}</span>
        </div>
        <!-- Bonus -->
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const user = getUserData();
  const book = await getBook(id);
  const bookLikes = await getLikes(id);
  const userLike = user && (await getUserLike(id, user._id));
  book.likes = bookLikes;
  book.isLiked = userLike;
  const isOwner = user?._id === book._ownerId;

  function update() {
    ctx.render(detailsTemplate(book, isOwner, user, del, like));
  }

  async function del() {
    const confirmation = confirm(
      'Are you sure, you want to delete this book?'
    );

    if (confirmation) {
      await deleteBook(id);
    }

    ctx.page.redirect('/');
  }

  async function like() {
    await likeBook(id);
    book.likes++;
    book.isLiked++;
    update();
  }

  update();
}
