// require Express.js
const express = require('express');
// require files - routes folder, all files and config folder, connection file
const routes = require('./controllers');
const sequelize = require('./config/connection');
// to access stylesheet
const path = require('path');
// require handlebars.js
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(routes);
//to access stylesheet
app.use(express.static(path.join(__dirname, 'public')));
// handlebars.js middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
// *** Note: force: true used when updating any model data
sequelize.sync({ force: false }). then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

// Notes:
// The router instance in routes/index.js collected everything and packaged it up for server.js to use.
// The express.static() method is a built-in Express.js middleware function that can take all of the contents of a folder and serve them as static assets. This is useful for front-end specific files like images, style sheets, and JavaScript files.