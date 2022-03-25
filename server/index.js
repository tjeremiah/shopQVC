const express  = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//logger middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//middleware to parse requests from req-body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//matches all routes to /api
app.use('/api', require('./apiRoutes')) 

// Send index.html for any other requests
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public'))
});
//error handling middleware
app.use(function(err,req, res, next) {
    console.error(err);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000 //// this can be very useful if you deploy to Heroku!
app.listen(port, function () {
    console.log(`your server is listening on ${port}`)
});

