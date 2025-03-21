//requirements

const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
//index-signup
module.exports.index1 = (req, res) => {
  res.render("users/signup.ejs");
};

//signup
module.exports.signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);

    //Automatic login code
    req.login(registerUser, (err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

// index-login
module.exports.index2 = (req, res) => {
  res.render("users/login.ejs");
};

// Login
module.exports.login = wrapAsync(async (req, res) => {
  req.flash("success", "Welcome to Wanderlust..");
  let url = res.locals.redirectUrl || "/listings";
  res.redirect(url);
});
