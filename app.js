const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Listing2 = require("./models/listing2.js");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const mongoUrl = "mongodb://127.0.0.1:27017/marketdoze";
const wrapAsync = require("./utils/wrapAsync");
// const { listingSchema } = require("./schema.js");
const Review = require("./models/review.js");
const Review2 = require("./models/review2.js");
const session = require("express-session");
// const listings= require("./Routes/listing.js");
//  const reviews= require("./Routes/review.js");
var flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const influencer = require("./models/influencer.js");

const userRouter = require("./Routes/user.js");
const influencerRouter = require("./Routes/influencer.js");
const expressError = require("./utils/expressError.js");

const {
  isLoggedIn,
  isOwner,
  validatelisting,
  validateReview,
} = require("./middleware.js");

const sessonOptions = {
  secret: "mysupercreadecod",
  resave: false,
  saveUninitized: true,
  cookie: {
    expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};
app.use(session(sessonOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(influencer.authenticate()));
passport.serializeUser(influencer.serializeUser());
passport.deserializeUser(influencer.deserializeUser());

main()
  .then((res) => {
    console.log("dataBase connected ");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(mongoUrl);
}
app.get("/", (req, res) => {
  res.send("hello i am root");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//_______middlewear_ for ___flashMassage
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user; //navbar me use hua hai

  next();
});
app.get(
  "/listing2/new",
  wrapAsync(async (req, res) => {
    res.render("listing2/new2.ejs");
  })
);


//_______User signup__________________________________________________________________

app.use("/", userRouter);
app.use("/", influencerRouter);

app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
  })
);
// request for advertisement______________________________listing2
app.get(
  "/listing2/request",
  wrapAsync(async (req, res) => {
    res.render("listing2/customer.ejs");
  })
);

// Listing2_______________________________________________________________________________________________________________________
app.get(
  "/listing2",
  async(req, res) => {
    const allListing2 = await Listing2.find({});
    res.render("listing2/index2.ejs", { allListing2 });
  });
  // show routes______
  app.get(
    "/listing2/:id",
    wrapAsync(async (req, res) => {
      const { id } = req.params;
      const listing = await Listing2.findById(id)
        .populate("reviews")
        .populate("owner");
      if (!listing) {
        req.flash("error", "Listing you request does not exist");
        res.redirect("/listing2");
      }
      console.log(listing);
      res.render("listing2/show2.ejs", { listing });
    })
  );
  // new Routes_________//upper likha hua hai yhi cheez line 96
// app.get(
//   "/listing2/new",
//   wrapAsync(async (req, res) => {
//     res.render("listing2/new2.ejs");
//   })
// );

// create Routes________
app.post(
  "/listing2",
  

  wrapAsync(async (req, res, next) => {
    const newListing = new Listing2(req.body.listing2);
    console.log(req.body.listing2);
    
    await newListing.save();
    req.flash("success", "Created new listng");
    res.redirect("/listing2");
  })
);
// show search influencer____________________________________________

app.post("/listing2/showInfluencer",isLoggedIn, async (req, res, next) => {
  try {
    console.log("Request Body:", req.body);  // Inspect the request body

    const { influencerName } = req.body;  // Match the field name correctly
    console.log("Received Influencer Name:", influencerName);

    const listing = await Listing2.findOne({ influencerName:influencerName });  // Query using correct field
    console.log("Found Listings:", listing);

    if (listing.length === 0) {
      return res.status(404).send("No influencer found with the given name.");
    }
    res.render("listing2/show2.ejs", { listing });
  } catch (error) {
    console.error("Error fetching listings:", error);
    next(error);  // Pass the error to error-handling middleware
  }
});

// // request for advertisement______________________________106

// app.get(
//   "/listing2/request",

//   wrapAsync(async (req, res) => {
//     res.render("listing2/customer2.ejs");
//   })
// );
  // _______________________________________________

// new Routes_________
app.get(
  "/listings/new",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    res.render("listings/new.ejs");
  })
);

// create Routes________
app.post(
  "/listings",
  isLoggedIn,

  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    console.log(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Created new listng");
    res.redirect("/listings");
  })
);
// showserchHouseOwner______________________
app.post("/listings/showHouseOwers", async (req, res, next) => {
  try {
    console.log("Request Body:", req.body);  // Inspect the request body

    const { location } = req.body;  // Match the field name correctly
    console.log("Received Influencer Name:", location);

    const listing = await Listing.findOne({ location:location });  // Query using correct field
    console.log("Found Listings:", listing);

    if (listing.length === 0) {
      return res.status(404).send("No influencer found with the given name.");
    }
    res.render("listings/show.ejs", { listing });
  } catch (error) {
    console.error("Error fetching listings:", error);
    next(error);  // Pass the error to error-handling middleware
  }
});
// __________respose for customer
app.post(
  "/listing2/respose",
  wrapAsync(async (req, res, next) => {
  res.render("listing2/resposeForCustomer.ejs")
  })
);
// resposeForContactUs______
app.post(
  "/Home/contactUS",
  wrapAsync(async (req, res, next) => {
  res.render("Home/responseForHomePage.ejs")
  })
);


// ___________________________________________________________________________________________________________________________________________________

// show Routs________________
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate("reviews")
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you request does not exist");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  })
);

// Edit Routes____________
app.get(
  "/listings/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you request does not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

// UPdate Routes________________
app.put(
  "/listings/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Edited listing");
    res.redirect(`/listings/${id}`);
  })
);

// delete Routes__________________
app.delete(
  "/listings/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Deleted listing");

    res.redirect("/listings");
  })
);

// __________________________________________________________________________

app.get("/Home", async (req, res) => {
  res.render("mainHome.ejs");
});

//__________________________________________________________________________________________________________________
//reviews_
//post review routes_____________________

app.post(
  "/listings/:id/reviews",
  validateReview,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("new review save");
    // res.redirect(`/listings/${listing._id}`);
    req.flash("success", "Created new review");

    res.redirect(`/listings/${id}`);
  })
);

//delete review routes
app.delete(
  "/listings/:id/reviews/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    const review = await Review.findByIdAndDelete(reviewId);
    console.log(review);
    req.flash("success", "Deleted review");

    res.redirect(`/listings/${id}`);
  })
);

// listing2 reviews____________________
app.post(
  "/listing2/:id/review2",
  validateReview,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const listing = await Listing2.findById(req.params.id);
    let newReview = new Review2(req.body.review);
    listing.review2.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("new review save");
    // res.redirect(`/listings/${listing._id}`);
    req.flash("success", "Created new review");

    res.redirect(`/listing2/${id}`);
  })
);

app.all("*", (req, res, next) => {
  next(new expressError(404, "page not found"));
});

// Error midleWear handler________________
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.render("error.ejs", { message });
  // res.status(statusCode).send(message);
});

app.listen("8080", () => {
  console.log("server is running on port 8080");
});
