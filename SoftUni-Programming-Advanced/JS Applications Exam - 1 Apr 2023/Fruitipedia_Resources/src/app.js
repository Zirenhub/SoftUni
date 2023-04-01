import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { fruitsPage } from './views/fruits.js';
import { addFruitPage } from './views/addFruit.js';
import { fruitPage } from './views/fruitPage.js';
import { fruitEditPage } from './views/fruitEdit.js';
import { searchPage } from './views/search.js';

function renderView(content) {
  const userData = getUserData();

  render(layoutTemplate(userData, content), root);
}
// inject dependencies
function fillContext(ctx, next) {
  ctx.render = renderView;

  next();
}

// change root, depending on requirements
const root = document.body;

page(fillContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/fruits', fruitsPage);
page('/add-fruit', addFruitPage);
page('/search', searchPage);
page('/:id/edit', fruitEditPage);
page('/:id', fruitPage);

page.start();

function logoutAction(ctx) {
  logout();
  ctx.page.redirect('/');
}
