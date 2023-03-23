import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// replace with actual view
const registerTemplate = (onSubmit) => html`
  <!-- Register Page ( Only for Guest users ) -->
  <section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onSubmit}>
      <fieldset>
        <legend>Register Form</legend>
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
        <p class="field">
          <label for="repeat-pass">Repeat Password</label>
          <span class="input">
            <input
              type="password"
              name="confirm-pass"
              id="repeat-pass"
              placeholder="Repeat Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Register" />
      </fieldset>
    </form>
  </section>
`;

export function registerPage(ctx) {
  // change user obj based on requirements
  async function onSubmit({
    email,
    password,
    ['confirm-pass']: repass,
  }) {
    if (!email || !password) {
      return alert('All fields are required.');
    }
    if (password !== repass) {
      return alert('Passwords must match');
    }
    await register(email, password);
    // change redirect path based on requirements
    ctx.page.redirect('/');
  }

  ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
}
