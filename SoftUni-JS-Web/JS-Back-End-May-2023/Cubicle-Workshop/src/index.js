const express = require('express');
const http = require('http');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const homepageRoute = require('./routes/homepage');
const cubeRoute = require('./routes/cube');
const accessoryRoute = require('./routes/accessory');
const authRoute = require('./routes/auth');

const { authMiddleware, isAuth } = require('./middlewares/authMiddleware');

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
app.use(cookieParser());
app.use(authMiddleware);

const PORT = 5000;
const server = http.createServer(app);

app.use('/auth', authRoute);
app.use('/cube', cubeRoute);
app.use('/accessory', isAuth, accessoryRoute);
app.use('/', homepageRoute);
app.use((err, req, res, next) => {
  res.status(404).render('404', { err });
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
