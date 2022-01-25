// Server config
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  name: 'solo',
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

// require routes
const homeRouter = require('./routes/home.route');
const bmiRouter = require('./routes/bmi.route');
const exerciseRouter = require('./routes/exercise.route');
const foodRouter = require('./routes/food.route');

const app = express();
const PORT = 3000;




app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));



// app.use for routes
app.use('/', homeRouter);
app.use('/bmi', bmiRouter);
app.use('/exercise', exerciseRouter);
app.use('/food', foodRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
