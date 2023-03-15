import { html } from '../../node_modules/lit-html/lit-html.js';

const headerTemplate = (auth) => html`<header>
  <!-- Navigation -->
  <a id="logo" href="/"
    ><img id="logo-img" src="./images/logo.jpg" alt=""
  /></a>

  <nav>
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>

    <!-- Logged-in users -->
    <div class="user">
      <a href="#">Create Offer</a>
      <a href="#">Logout</a>
    </div>

    <!-- Guest users -->
    <div class="guest">
      <a href="/login">Login</a>
      <a href="#">Register</a>
    </div>
  </nav>
</header>`;

export default headerTemplate;
