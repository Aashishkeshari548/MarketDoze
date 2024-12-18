const mongoose = require("mongoose");
const Review = require("./review.js");

const Schema = mongoose.Schema;
const listing2Schema = new Schema({
  influencerName: {
    type: String,
    required: true,
  },
  followers: {
    type: String,
  },
  followings: {
    type:String,

  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729528899/bsuadcjpeo7qnyuqqbzo.png",
    set: (v) =>
      v === "" ? " https://res.cloudinary.com/dalaqu8f9/image/upload/v1729528899/bsuadcjpeo7qnyuqqbzo.png" : v,
  },

  
  price: {
    type: Number,
  },

  country: {
    type: String,
  },
  instaUrl: {
    type: String,
  },
  youtubeUrl: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
  type: Schema.Types.ObjectId,
  ref: "User"} 
});

listing2Schema.post("findOneAndDelete", async (listing2) => {
  if (listing2) {
    await Review.deleteMany({ _id: { $in: listing2.reviews } });
  }
});

const Listing2 = mongoose.model("Listing2", listing2Schema);
module.exports = Listing2;
