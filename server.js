// to access stylesheet
const path = require('path');
// require Express.js
const express = require('express');
// require handlebars.js
const exphbs = require('express-handlebars');

// require Express.js
const app = express();
// require port, also allows for Heroku port to work
const PORT = process.env.PORT || 3001;

// require sequlize
const sequelize = require('./config/connection');

// require handlebars.js
const hbs = exphbs.create({});

// // require files - routes folder(now controllers folder), all files 
// const routes = require('./controllers');
// turn on routes
// app.use(routes);

// handlebars.js middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express.js middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//to access stylesheet
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes(now controllers folder)
app.use(require('./controllers'));

// turn on connection to db and server
// *** Note: force: true used when updating any model data
sequelize.sync({ force: false }). then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

// Notes:
// The router instance in routes/index.js collected everything and packaged it up for server.js to use.
// The express.static() method is a built-in Express.js middleware function that can take all of the contents of a folder and serve them as static assets. This is useful for front-end specific files like images, style sheets, and JavaScript files.