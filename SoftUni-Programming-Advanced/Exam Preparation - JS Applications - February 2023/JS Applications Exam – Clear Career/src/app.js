import page from '../node_modules/page/page.mjs';
import dashboardPage from './views/dashboard.js';
import homePage from './views/home.js';
import loginPage from './views/login.js';

const wrapper = document.getElementById('wrapper');

function insertDOM(ctx, next) {
  ctx.wrapper = wrapper;
  next();
}

function insertSetPage(ctx, next) {
  function setPage(pageToRedirect) {
    page.redirect(`/${pageToRedirect}`);
  }

  ctx.setPage = setPage;

  next();
}

function getAuth(ctx, next) {
  const auth = localStorage.getItem('auth');
  if (auth) {
    ctx.auth = auth;
  }
  next();
}

page(insertDOM);
page(insertSetPage);
page(getAuth);

page('/', homePage);
page('/login', loginPage);
page('/dashboard', dashboardPage);

page.start();
