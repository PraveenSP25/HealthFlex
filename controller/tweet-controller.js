const TweetService = require('../service/tweet-service');

exports.postTweet = async (req, res) => {
    try {
        const { text } = req.body;
        const token = req.headers.authorization.split(' ')[1];
        await TweetService.postTweet(text, token);
        res.status(201).send({ message: 'Tweet posted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getUserTimeline = async (req, res) => {
    try {
        const userId = req.params.userId;
        const tweets = await TweetService.getUserTimeline(userId);
        res.status(200).send({ tweets });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
