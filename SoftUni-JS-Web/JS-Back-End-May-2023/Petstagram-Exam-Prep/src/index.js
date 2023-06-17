const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { Authenticate } = require('./middlewares/authMiddleware');

const PORT = 3000;
const DB_URI = 'mongodb://127.0.0.1:27017/petstagram';

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB conntected'))
  .catch((err) => console.log(`Error connecting to db ${err.message}`));

const app = express();

const hbs = handlebars.create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views', 'layout'),
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views', 'partials'),
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(Authenticate);

app.use(routes);
app.use((req, res) => {
  res.render('404');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
