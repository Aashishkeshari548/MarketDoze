const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const influencerSchema=new Schema({
 createdAt:{
        type:String,
       require:true,
    }, 
     email: {
        type: String,
        required: true,   // Makes email a required field
        unique: true,     // Ensures no two users have the same email
    },
   
});
influencerSchema.plugin(passportLocalMongoose );
const  influencer=mongoose.model("influencer", influencerSchema);
module.exports=influencer; 