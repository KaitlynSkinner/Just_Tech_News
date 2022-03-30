const { Comment } = require('../models');

const commentdata = [
	{
		"id": 2,
		"comment_text": "Just Tech News is great!",
		"user_id": 3,
		"post_id": 3,
		"createdAt": "2022-03-30T17:15:36.000Z",
		"updatedAt": "2022-03-30T17:15:36.000Z"
	},
	{
		"id": 4,
		"comment_text": "Taskmaster is growing!",
		"user_id": 1,
		"post_id": 2,
		"createdAt": "2022-03-30T17:16:51.000Z",
		"updatedAt": "2022-03-30T17:16:51.000Z"
	},
	{
		"id": 5,
		"comment_text": "This article is awesome!",
		"user_id": 2,
		"post_id": 1,
		"createdAt": "2022-03-30T17:17:53.000Z",
		"updatedAt": "2022-03-30T17:17:53.000Z"
	}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;