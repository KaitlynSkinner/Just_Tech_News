const { Post } = require('../models');

const postdata = [

	{
        "title": "Taskmaster goes public!",
		"post_url": "https://taskmaster.com/press",
        "user_id": 1

	},
	{
        "title": "Why it's great to write blog posts",
		"post_url": "https://taskmaster.com/blog-posts",
		"user_id": 2
	},
    {
        "title": "Just Tech News goes public!",
		"post_url": "https://taskmaster.com/press",
        "user_id": 3
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;