const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const reviewSchema2=new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        Max:5,
    },createdAt:{
        type:Date,
        default:Date.now(),
    },
});
const Review2=mongoose.model("Review2",reviewSchema2);
module.exports=Review2; 