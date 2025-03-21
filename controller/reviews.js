//requirements
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

//Add review
module.exports.addReview = async (req, res) => {
  let list = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  console.log(newReview);

  list.reviews.push(newReview);

  await list.save();
  await newReview.save();
  // res.send("API is working");
  req.flash("success", "review added success!");
  res.redirect(`/listings/${list._id}`);
};

//delete Review
module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "review deleted success!");

  res.redirect(`/listings/${id}`);

  // pull operator find and remove data
};
