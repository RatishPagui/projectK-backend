const express = require('express')
const router = express.Router()
const Review = require('../models/review')

router.post('/reviews', (req, res) => {
    const review = new Review(req.body);
    review.save().then(() => res.send({ message: 'Review submitted!' }));
});

router.get('/reviews', (req, res) => {
    Review.find().then(reviews => res.json(reviews));
});

module.exports = router;