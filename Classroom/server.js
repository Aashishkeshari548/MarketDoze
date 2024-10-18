const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const path = require("path");
var flash = require("connect-flash");
var session = require("express-session");

app.use("/users", users);
app.use("/posts", posts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// const cookieParser= require("cookie-parser");
// app.use(cookieParser("seceretcode"))
app.use(
  session({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use((req, res, next) => {
  //_______middlewear_
  res.locals.massages = req.flash("success");
  res.locals.errorMassages = req.flash("error");
  next();
});

// _______________________________________connect-flash____likhane aur acha tarika__________res.local

app.get("/register", (req, res) => {
  let { name = " anonymous" } = req.query;
  if (name === " anonymous") {
    req.flash("error", "user register not ___successfuly!");
  } else {
    req.flash("success", "user register successfuly!");
  }
  req.session.name = name;
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // res.locals.massages=req.flash("success");
  // res.locals.errorMassages=req.flash("error"); // ye do hi midilwear me likh sakte hai  hua hai jaise uper middlewear me kiya hua hai

  res.render("page.ejs", { name: req.session.name });
});

// ___________________________________count of request
app.get("/reqCount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`your sent a request ${req.session.count} `);
});
// _________________________________________
// app.get("/test",(req,res)=>{
//   res.send("your cookies is avilable")
// })
// app.get("/getcookies",(req,res)=>{
//  let{geet="anonymous"}=req.cookies;
//   res.send(`hello ${geet}`)
// })
// _____________________________________________

// app.get("/signCookiesRoutes",(req,res)=>{
//   res.cookie("madeIn","India",({signed:true}))
//   res.send ("hello moto");
// })
// app.get("/Verify",(req,res)=>{
// console.dir(req.cookies)
// console.dir(req.signedCookies)
// res.send ("verified");
// })

//__________________________________________________

app.listen("8080", () => {
  console.log("server is running on port 8080");
});
