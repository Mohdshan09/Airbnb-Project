const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const feildController = require("../controller/category.js");
const { isOwener, isLoggedIn, validateSchema } = require("../middleware.js");

// Get cities
router.get("/category/beach", isLoggedIn, feildController.beachList);

// Get trends
router.get("/category/trends", isLoggedIn, feildController.TrendList);

// Get View
router.get("/category/views", isLoggedIn, feildController.viewList);

// Get farm
router.get("/category/farm", isLoggedIn, feildController.farmList);

// Get mountains
router.get("/category/mountain", isLoggedIn, feildController.MountList);

// Get container
router.get("/category/container", isLoggedIn, feildController.containerList);

// Get arctic
router.get("/category/arctic", isLoggedIn, feildController.arcticList);

// Get rivers
router.get("/category/river", isLoggedIn, feildController.riverList);

// Get rooms
router.get("/category/rooms", isLoggedIn, feildController.roomList);

// Get boats
router.get("/category/boat", isLoggedIn, feildController.boatList);

// Get city
router.get("/category/city", isLoggedIn, feildController.cityList);

module.exports = router;
