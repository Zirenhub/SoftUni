const express = require('express');
const http = require('http');
const handlebars = require('express-handlebars');
const path = require('path');

const homepageRoute = require('./routes/homepage');
const cubeRoute = require('./routes/cube');

const app = express();
const hbs = handlebars.create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views', 'layout'),
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views', 'partials'),
});

app.use(express.static('src/assets'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;
const server = http.createServer(app);

app.use('/cube', cubeRoute);
app.use('/', homepageRoute);
app.use((req, res, next) => {
  res.status(404).render('404');
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
