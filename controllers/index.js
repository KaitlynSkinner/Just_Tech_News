// collect the packaged group of API endpoints and prefix them with the path /api
const router = require('express').Router();
// require /api folder = removes '/api' from routes in api folder
const apiRoutes = require('./api');
// require homepage routes
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;