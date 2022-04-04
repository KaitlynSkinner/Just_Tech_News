const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

// GET all posts for homepage - http://localhost:3001/
router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // pass a single post object into the homepage template
        //console.log(dbPostData[0]);
        // loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
    // res.render('homepage', {
    //     id: 1, 
    //     post_url: 'https://handlebarsjs.com/guide/',
    //     title: 'Handlebars Docs',
    //     created_at: new Date(),
    //     vote_count: 10,
    //     comments: [{}, {}],
    //     user: {
    //         username: 'test_user'
    //     }
    // });
});

// http://localhost:3001/login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// http://localhost:3001/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

// Note:
// the render() method can accept an array instead of an object, that would prevent from adding other properties to the template later on
// To avoid future headaches, simply add the array to an object and continue passing an object to the template.
// i.e. res.render('homepage', { posts });