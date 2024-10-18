const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema=new Schema({
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
userSchema.plugin(passportLocalMongoose);
const User=mongoose.model("User",userSchema);
module.exports=User; 