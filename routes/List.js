//requirements...
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const { isOwener, isLoggedIn, validateSchema } = require("../middleware.js");
const listController = require("../controller/listing.js");

router
  .route("/")
  .get(wrapAsync(listController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    wrapAsync(listController.addLists)
  );

//New route
router.get("/new", isLoggedIn, listController.newForm);

router
  .route("/:id")
  .get(wrapAsync(listController.showList))
  .put(
    isLoggedIn,
    isOwener,
    upload.single("listing[image]"),
    validateSchema,
    wrapAsync(listController.updateList)
  )
  .delete(isLoggedIn, isOwener, wrapAsync(listController.deleteList));

// Edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(listController.editList));

module.exports = router;
