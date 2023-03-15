import {
  html,
  render,
} from '../../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';

function homePage(ctx) {
  const homeTempalte = html`<main>
    <section id="home">
      <img
        src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
        alt="home"
      />
      <h2>Searching for a job?</h2>
      <h3>The right place for a new career start!</h3>
    </section>
  </main>`;

  render(
    html` ${headerTemplate(ctx.auth)} ${homeTempalte} `,
    ctx.wrapper
  );
}

export default homePage;
