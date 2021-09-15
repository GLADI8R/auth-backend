const port = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const passport = require('passport');

const users = require('./routes/api/users');

dotenv.config({path: './config/config.env'});
connectdb();

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);


// Routes
app.use('/api/v1/users', users);

app.listen(port, () => console.log(`Server started. Running on port: ${port}`));