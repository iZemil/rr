var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = 4000;
var cors = require('cors');
var mLabData = require('../protected');

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect(mLabData, { useMongoClient: true })
    .then(() => {
    	// if all is ok we will be here
    	console.log('Start');
    })
    .catch(err => {
    	// if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required application specific custom router module
var itemRouter = require('./src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(PORT, function(){
  console.log('Server is running on Port: ', PORT);
});