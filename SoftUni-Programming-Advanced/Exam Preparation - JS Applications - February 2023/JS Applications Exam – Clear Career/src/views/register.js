import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';

function registerPage(ctx, next) {
  const registerTemplate = (
    onSubmit
  ) => html` <!-- Register Page (Only for Guest users) -->
    <main>
      <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="login-form" @submit=${onSubmit}>
            <input
              type="text"
              name="email"
              id="register-email"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="password"
            />
            <input
              type="password"
              name="re-password"
              id="repeat-password"
              placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p class="message">
              Already registered? <a href="#">Login</a>
            </p>
          </form>
        </div>
      </section>
    </main>`;

  function submitRegister(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formEnteries = Object.fromEntries(formData.entries());
    const email = formEnteries.email;
    const password = formEnteries.password;
    const rePassword = formEnteries['re-password'];

    async function sendRegister() {
      try {
        if (!email) {
          throw new Error('Email is empty');
        }
        if (!password) {
          throw new Error('Password is empty');
        }
        if (!rePassword) {
          throw new Error('Repeat password is empty');
        }
        if (rePassword !== password) {
          throw new Error("Passwords don't match");
        }
        const res = await fetch(
          'http://localhost:3030/users/register',
          {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await res.json();
        if (res.ok) {
          localStorage.setItem('auth', JSON.stringify({ ...data }));
          ctx.setPage('dashboard');
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        alert(err.message);
      }
    }
    sendRegister();
  }

  render(
    html`
      ${headerTemplate(ctx.auth)} ${registerTemplate(submitRegister)}
    `,
    ctx.wrapper
  );
}

export default registerPage;
