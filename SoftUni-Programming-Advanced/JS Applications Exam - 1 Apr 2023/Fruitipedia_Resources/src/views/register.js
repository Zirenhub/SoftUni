import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// replace with actual view
const registerTemplate = (onSubmit) => html`
  <!-- Register Page (Only for Guest users) -->
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit=${onSubmit}>
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
          Already registered? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  </section>
`;

export function registerPage(ctx) {
  // change user obj based on requirements
  async function onSubmit({
    email,
    password,
    ['re-password']: repass,
  }) {
    if (!email || !password) {
      return alert('All fields are required.');
    }
    if (password !== repass) {
      return alert('Passwords must match');
    }
    await register(email, password);

    ctx.page.redirect('/');
  }

  ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
}
