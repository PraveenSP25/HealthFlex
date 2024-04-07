const jwt = require('jsonwebtoken');
const Tweet = require('../models/tweet');

exports.postTweet = async (text, token) => {
    const decodedToken = jwt.verify(token, 'secret_key');
    const userId = decodedToken.userId;
    const tweet = new Tweet({ userId, text, createdAt: new Date() });
    await tweet.save();
};

exports.getUserTimeline = async (userId) => {
    return Tweet.find({ userId }).sort({ createdAt: -1 });
};
