const express = require("express");
const router = express.Router();

const RatingService = require("../services/ratingService");
const checkAuth = require("../middleware/check-auth");

router.patch('/:id', checkAuth, RatingService.updateRating)

router.delete('/:id', checkAuth, RatingService.deleteRating)

router.get('/', checkAuth, RatingService.getAll)

router.post("/create", checkAuth, RatingService.postRating);

router.post("/like/:id", checkAuth, RatingService.likeRating);

router.post("/setSeen", checkAuth, RatingService.setSeenRatings);



module.exports = router;