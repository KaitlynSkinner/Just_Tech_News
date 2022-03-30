const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
	{
		"id": 1,
		"username": "Kaitlyn",
		"email": "kaitlyneskinner@gmail.com"
	},
	{
		"id": 2,
		"username": "Jessica",
		"email": "jessicaskinner@gmail.com"
	},
	{
		"id": 3,
		"username": "Jessika",
		"email": "jessikacampbell@gmail.com"
	}
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;