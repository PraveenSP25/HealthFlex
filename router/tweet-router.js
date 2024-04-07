const express = require('express');
const tweetController = require('../controller/tweet-controller');

const router = express.Router();

router.post('/', tweetController.postTweet);
router.get('/users/:userId/timeline', tweetController.getUserTimeline);

module.exports = router;
