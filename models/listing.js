// Constrainst
const Review = require("./reviews.js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
  },

  location: {
    type: String,
  },

  country: {
    type: String,
  },
  category: {
    type: [String], // Array of categories
    enum: [
      "Beach",
      "Mountains",
      "Rivers",
      "City",
      "Trending",
      "Rooms",
      "Farm",
      "Amazing Views",
      "Arctic",
      "Boats",
      "Container",
    ], // Allowed categories
    required: true,
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  owener: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Middle-ware that deleted listing as well as all reviews associated with
// listings
listSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const List = mongoose.model("List", listSchema);

module.exports = List;
