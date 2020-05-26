// require('dotenv').config();
// Server.js - the initial starting point for the
// Node/Express server
const express = require('express');

// setting up port
const PORT = process.env.PORT || 8080;

// Creating express app
const app = express();
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(express.static('public'));


// routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).render('404');
});

// set up handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}.`);
});
