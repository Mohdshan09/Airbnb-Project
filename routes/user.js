const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");
const userController = require("../controller/user.js");

// Get-signup
router.get("/signup", userController.index1);

// Post-signup
router.post("/signup", wrapAsync(userController.signup));

// Get-login
router.get("/login", userController.index2);

// Post-login
router.post(
  "/login",
  saveUrl,
  //Middleware
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

// GET - logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }

    req.flash("success", "you are logged out ! ");
    res.redirect("/listings");
  });
});

module.exports = router;
