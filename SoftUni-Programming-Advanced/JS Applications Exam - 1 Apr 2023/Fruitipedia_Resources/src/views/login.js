import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// replace with actual view
const loginTempalte = (onSubmit) => html`
  <!-- Login Page (Only for Guest users) -->
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
`;

export function loginPage(ctx) {
  async function onSubmit({ email, password }) {
    if (!email || !password) {
      return alert('All fields should be filled.');
    }

    await login(email, password);
    ctx.page.redirect('/');
  }

  ctx.render(loginTempalte(createSubmitHandler(onSubmit)));
}
