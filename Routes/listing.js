// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
// const expressError = require("../utils/expressError.js");
// const wrapAsync = require("../utils/wrapAsync");


// // const methodOverride = require('method-override');
// // router.use(methodOverride('_method'));
// const validatelisting = (req, res, next) => {
//     ///this is for joi error validation
//     let { error } = listingSchema.validate(req.body);
//     console.log(error);
//     if (error) {
//       let errMsg = error.details.map((el) => el.message).join(",");
//       throw new expressError(400, error);
//     } else {
//       next();
//     }
//   };
  

// //index Routes_____________
// router.get(
//     "/",
//     wrapAsync(async (req, res) => {
//       const allListing = await Listing.find({});
//       res.render("listings/index.ejs", { allListing });
//     })
//   );
  
//   // new Routes_________
//   router.get(
//     "/new",
//     wrapAsync(async (req, res) => {
//       res.render("listings/new.ejs");
//     })
//   );
  
//   // create Routes________
//   router.post(
//     "/",
   
//    async (req, res, next) => {
//       // if (result.error) {
//       //   throw new expressError(400, "location is missing");
//       // }
//       console.log(req.body)
//       const newListing = new Listing(req.body);
//       await newListing.save();
//       res.redirect("/listings");
//     }
//   );
//   // show Routs________________
//   router.get(
//     "/:id",
//     wrapAsync(async (req, res) => {
//       const { id } = req.params;
//       const listing = await Listing.findById(id).populate("reviews");
//       res.render("listings/show.ejs", { listing });
//     })
//   );
  
//   // create Routes________
//   // app.post("/listings", async (req, res, next) => {
//   //   // const { title, description, img, price, location, country } = req.body;
//   //   try {
//   //     const listing = req.body.listing; //second way create object in HTML files= new.ejs
//   //     new Listing(listing).save();
//   //     res.redirect("/listings");
//   //   } catch (err) {
//   //     next(err);
//   //   }
//   // });
  
//   // Edit Routes____________
//   router.get(
//     "/:id/edit",
//     wrapAsync(async (req, res) => {
//       const { id } = req.params;
//       const listing = await Listing.findById(id);
//       res.render("listings/edit.ejs", { listing });
//     })
//   );
  
//   // UPdate Routes________________
//   router.put(
//     "/:id",
//     wrapAsync(async (req, res, next) => {
//       // if (!req.body.listing) {
//       //   throw new expressError(400, "send valid data for Update");
//       // }
//       const { id } = req.params;
//       await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//       res.redirect(`/listings/${id}`);
//     })
//   );
  
//   // delete Routes__________________
//   router.delete(
//     "/:id",
//     wrapAsync(async (req, res) => {
//       const { id } = req.params;
//       const deletedListing = await Listing.findByIdAndDelete(id);
//       console.log(deletedListing);
//       res.redirect("/listings");
//     })
//   );

// module.exports = router;
