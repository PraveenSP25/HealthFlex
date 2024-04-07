const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config()

const app = express();
const port = process.env.PORT;

// MongoDB connection
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.hk5xs93.mongodb.net/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Routers
const userRouter = require('./router/user-router');
const tweetRouter = require('./router/tweet-router');

// Routes
app.use('/api/users', userRouter);
app.use('/api/tweets', tweetRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
