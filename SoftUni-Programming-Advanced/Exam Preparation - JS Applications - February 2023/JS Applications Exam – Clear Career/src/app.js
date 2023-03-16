import page from '../node_modules/page/page.mjs';
import dashboardPage from './views/dashboard.js';
import homePage from './views/home.js';
import loginPage from './views/login.js';
import registerPage from './views/register.js';
import createOfferPage from './views/createOffer.js';
import offerDetailsPage from './views/offerDetails.js';
import offerEditPage from './views/offerEdit.js';
import getOffer from './utils/getOffer.js';

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
    ctx.auth = JSON.parse(auth);
  }
  next();
}

async function logout(ctx, next) {
  try {
    const auth = ctx.auth;
    if (auth) {
      const res = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
          'X-Authorization': auth.accessToken,
        },
      });
      if (res.ok) {
        localStorage.removeItem('auth');
        ctx.setPage('dashboard');
      } else {
        const data = await res.json();
        throw new Error(data.message);
      }
    }
  } catch (err) {
    alert(err.message);
  }
}

async function offerDelete(ctx, next) {
  const { offerID } = ctx.params;

  try {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      const offer = await getOffer(offerID);
      if (offer._ownerId === ctx.auth._id) {
        const res = await fetch(
          `http://localhost:3030/data/offers/${offerID}`,
          {
            method: 'DELETE',
            headers: {
              'X-Authorization': ctx.auth.accessToken,
            },
          }
        );
        if (res.ok) {
          ctx.setPage('dashboard');
        } else {
          const data = await res.json();
          throw new Error(data.message);
        }
      }
    }
  } catch (err) {
    alert(err.message);
  }
}

page(insertDOM);
page(insertSetPage);
page(getAuth);

page('/', homePage);
page('/login', loginPage);
page('/logout', logout);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/create-offer', createOfferPage);
page('/:offerID', offerDetailsPage);
page('/:offerID/edit', offerEditPage);
page('/:offerID/delete', offerDelete);

page();
