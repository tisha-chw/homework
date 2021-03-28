const express = require('express')
const session = require('express-session')
const passport = require('passport');
const routes = require('./routes');
const connection = require('./config/connection');
const synchronize = require('./config/synchronize');
const { sync } = require('uid-safe');
require('./config/authorization');

const PORT = 3333;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  genid: () => sync(10)
}));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use('/', routes);

app.use('*', (req, res) => {
  // res.redirect('/profile')
});

async function runApp() {
  await connection.authenticate();
  await synchronize();
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}

runApp();
