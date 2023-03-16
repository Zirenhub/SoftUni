import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';

function loginPage(ctx) {
  const loginTemplate = (onSubmit) => html`<main>
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </section>
  </main>`;

  function submitLogIn(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(
      formData.entries()
    );

    async function sendLogIn() {
      try {
        const res = await fetch('http://localhost:3030/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        });
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
    if (email && password) {
      sendLogIn();
    }
  }
  render(
    html` ${headerTemplate(ctx.auth)} ${loginTemplate(submitLogIn)} `,
    ctx.wrapper
  );
}

export default loginPage;
