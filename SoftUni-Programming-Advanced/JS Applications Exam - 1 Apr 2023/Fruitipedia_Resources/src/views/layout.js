import { html } from '../../node_modules/lit-html/lit-html.js';

// replace with actual layout
export const layoutTemplate = (userData, content) => html`
  <header>
    <!-- Navigation -->
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.png" alt=""
    /></a>

    <nav>
      <div>
        <a href="/fruits">Fruits</a>
        <a href="/search">Search</a>
      </div>
      ${userData
        ? html` <!-- Logged-in users -->
            <div class="user">
              <a href="/add-fruit">Add Fruit</a>
              <a href="/logout">Logout</a>
            </div>`
        : html` <!-- Guest users -->
            <div class="guest">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>`}
    </nav>
  </header>

  <main>${content}</main>
`;
