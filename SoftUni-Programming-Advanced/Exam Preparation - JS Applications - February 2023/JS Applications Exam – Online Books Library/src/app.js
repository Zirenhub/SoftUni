import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myBooksPage } from './views/myBooks.js';

const root = document.getElementById('container');

function renderView(content) {
  const userData = getUserData();

  render(layoutTemplate(userData, content), root);
}
// inject dependencies
function fillContext(ctx, next) {
  ctx.render = renderView;

  next();
}

function logoutAction(ctx) {
  logout();
  ctx.page.redirect('/');
}

page(fillContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/create', createPage);
page('/my-books', myBooksPage);
page('/:id/edit', editPage);
page('/:id', detailsPage);

page.start();
