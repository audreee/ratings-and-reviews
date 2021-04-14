const express = require('express');
let reviewsController = require('../RatingsAndReviews/controller.js');
let overviewController = require('../Overview/controller.js');

let projectCatwalk = express.Router();

projectCatwalk.get('/reviews', reviewsController.getReviews);
projectCatwalk.get('/reviews/meta', reviewsController.getMetadata)
projectCatwalk.post('/reviews', reviewsController.sendReview);

projectCatwalk.get('/overview/products/:', overviewController.getProducts);

module.exports.projectCatwalk = projectCatwalk;
