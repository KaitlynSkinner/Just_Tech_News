const { Comment } = require('../models');

const commentdata = [
	{
		"id": 1,
		"comment_text": "Taskmaster climbs to the Number 1 spot!",
		"user_id": 3,
		"post_id": 1,
		"createdAt": "2022-04-10T18:51:03.000Z",
		"updatedAt": "2022-04-10T18:51:03.000Z"
	},
	{
		"id": 2,
		"comment_text": "This article is awesome!",
		"user_id": 3,
		"post_id": 2,
		"createdAt": "2022-04-10T18:51:30.000Z",
		"updatedAt": "2022-04-10T18:51:30.000Z"
	},
	{
		"id": 3,
		"comment_text": "Just Tech News becomes most popular destination for news!",
		"user_id": 3,
		"post_id": 3,
		"createdAt": "2022-04-10T18:52:07.000Z",
		"updatedAt": "2022-04-10T18:52:07.000Z"
	}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;