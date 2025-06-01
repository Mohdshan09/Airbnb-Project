// env
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// express
const express = require("express");
const app = express();
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/List.js");
const reviews = require("./routes/reviews.js");
const category = require("./routes/category.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
// mongodb
const mongoose = require("mongoose");

// encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const dbUrl = process.env.ATLAS_DB_URL;

main()
  .then((res) => {
    console.log(`Mongoose connected !`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

// ejs
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ejs-mate
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// static public files
app.use(express.static(path.join(__dirname, "/public")));

// encoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`sever is running on ${port}.`);
});

//Mongostore
const store = MongoStore.create({
  mongoUrl: process.env.ATLAS_DB_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Somthing went wrong !", err);
});

//Creating sessions
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

// Session Middleware
app.use(session(sessionOptions));
// Flash Middleware
app.use(flash());

// Passport-Local-Strategy
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

// serialize and de-serialized
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.redirect('/listings');
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  next();
});

app.use("/listings", listings);
app.use("/", category);
app.use("/listings/:id/reviews", reviews);
app.use("/", userRouter);

// error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message } = err;
  // res.render("listings/error.ejs", { err });
  res.status(status).render("listings/error.ejs", { err });
  next();
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});
