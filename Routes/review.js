const express = require("express");
const router = express.Router({mergeParams:true});
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const expressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");

const validateReview = (req, res, next) => {
  ///this is for joi error validation
  let { error } = reviewSchema.validate(req.body);
  console.log(error);
  if (error) {
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};

//post review routes_____________________

router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id)

    const listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    console.log(req.body)
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("new review save"); 
    // res.redirect(`/listings/${listing._id}`);
    res.redirect(`/listings/${id}`);
  })
);

//delete review routes
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    const review = await Review.findByIdAndDelete(reviewId);
    console.log(review);
    res.redirect(`/listings/${id}`);
  })
);
module.exports = router;
 