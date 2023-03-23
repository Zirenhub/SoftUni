import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// replace with actual view
const loginTempalte = (onSubmit) => html`
  <!-- Login Page ( Only for Guest users ) -->
  <section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${onSubmit}>
      <fieldset>
        <legend>Login Form</legend>
        <p class="field">
          <label for="email">Email</label>
          <span class="input">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </span>
        </p>
        <p class="field">
          <label for="password">Password</label>
          <span class="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Login" />
      </fieldset>
    </form>
  </section>
`;

export function loginPage(ctx) {
  async function onSubmit({ email, password }) {
    await login(email, password);
    ctx.page.redirect('/');
  }

  ctx.render(loginTempalte(createSubmitHandler(onSubmit)));
}
