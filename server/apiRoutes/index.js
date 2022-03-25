const router = require('express').Router();

// router.use('users', require('./users')); //eg. matches all routes to /api/users
// router.use();
// router.use()


// if a route does not exists
router.use(function(req, res, next) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

module.exports =  router;