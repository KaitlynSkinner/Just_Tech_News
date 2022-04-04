// to interact with filepath - stylesheets/style.css
const path = require('path');
// require Express.js
const express = require('express');
// require Express.js session
const session = require('express-session');
// require ExpressHandlebars - handlebars.js
const exphbs = require('express-handlebars');

// creates new express application
const app = express();
// 'production mode' - db connection to server, also allows for connection to Heroku port
const PORT = process.env.PORT || 3001;

// connect to database
const sequelize = require('./config/connection');
// connect the session to Sequelize database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    // {} would be where you could set additional options on the cookie, like maximum age
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// creates instance(s) of ExpressHandlebars - allowing full access to API
const hbs = exphbs.create({});

// // require files - routes folder(now controllers folder), all files 
// const routes = require('./controllers');
// turn on routes
// app.use(routes);

// Register `hbs.engine` with the Express app.
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