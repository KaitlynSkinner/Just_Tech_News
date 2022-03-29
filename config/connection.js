// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();


// Create connection to database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
    // database used
    process.env.DB_NAME,
    // username - .env to store the username
    process.env.DB_USER,
    // password - .env to store the password
    process.env.DB_PASSWORD,
    {
    // default localhost
    host: 'localhost',
    // the sql dialect of the database
    dialect: 'mysql',
    // custom port
    port: 3306
    }
);

module.exports = sequelize;

// ** MOCK DATA **
// USER
// {
// 	"username": "Kaitlyn",
// 	"email": "kaitlyneskinner@gmail.com",
// 	"password": "password1234"
// }

// POST
// {
// 	"title": "Why it's great to write blog posts",
// 	"post_url": "https://taskmaster.com/blog-posts",
// 	"user_id": 1
// }

// POSTS/UPVOTE
// {
// 	"user_id": 1,
// 	"post_id": 1
// }

// COMMENTS 
// {
// 	"comment_text": "This article is awesome!",
// 	"user_id": 1,
// 	"post_id": 2
// }