const express = require('express');
const routes = require('./routes');
const connection = require('./config/connection');
const synchronize = require('./config/synchronize');

const PORT = 3333;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use('/', routes);

app.use('*', (req, res) => {
   res.redirect('/registration')
});

async function runApp() {
  await connection.authenticate();
  await synchronize();
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}

runApp();
