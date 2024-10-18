const express = require("express");
const router = express.Router();
const influencer= require("../models/influencer.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const  {saveRedirectUrl}= require("../middleware.js");





router.get("/influencer/signup",(req,res)=>{
    res.render("influencer/signup.ejs");
});


router.post("/influencer/signup", wrapAsync(async (req, res) => {
    try {
        let { username, password, email } = req.body;
        
        // Create a new influencer object, not User
        const newInfluencer = new influencer({
            username,
            email
        });

        // Register the new influencer with the provided password
        const registeredInfluencer = await influencer.register(newInfluencer, password);
        console.log(registeredInfluencer);

        req.flash("success", "Welcome to MarketDoze");

        // Redirect to listings after successful registration
        res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);

        // Redirect to signup page on error
        res.redirect("/influencer/signup");
    }
}));

// // _____________________________________________login_______________________________
// router.get("/login",(req,res)=>{
//     res.render("user/login.ejs");
// });

// router.post("/login",saveRedirectUrl,
//     passport.authenticate("local",{failureRedirect:"/login",
//         failureFlash:true,
//     }),
//     async(req,res)=>{ 
//         req.flash("success","Welcome back to Wonderlust!")
//         let redirectUrl=res.locals.redirectUrl ||"/listings";
//         res.redirect(redirectUrl);
//     }
// ); 
// //____________logout_________
// router.get("/logout",(req,res,next)=>{
//     req.logout((err)=>{
//         if (err){
//             next(err);
//         }req.flash("success","you are logged out!");
//         res.redirect("/listings");
//     })
// })
module.exports=router;