//requirements
const Listing = require("../models/listing.js");

// index-controller
module.exports.index = async (req, res) => {
  let allList = await Listing.find({});
  res.render("listings/index.ejs", { allList });
};

// render-newFrom
module.exports.newForm = (req, res) => {
  res.render("listings/new.ejs");
};

// show-Form
module.exports.showList = async (req, res) => {
  let { id } = req.params;
  const lists = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owener");
  if (!lists) {
    req.flash("error", "Listing you requested for doesn't exist !");
    res.redirect("/listings");
  } else {
    // console.log(lists);

    res.render("listings/show.ejs", { lists });
  }
};

//Add-lists
module.exports.addLists = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owener = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New list added !");
  res.redirect("/listings");
};

//Edit-lists
module.exports.editList = async (req, res) => {
  let { id } = req.params;
  let lists = await Listing.findById(id);
  if (!lists) {
    req.flash("error", "Listing you requested for doesn't exist !");
    res.redirect("/listings");
  }
  let originalImg = lists.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_200,w_300");
  res.render("listings/edit.ejs", { lists, originalImg });
};

//update-lists
module.exports.updateList = async (req, res, next) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.path;
    let filename = req.file.filename;
    Listing.image = { url, filename };
    await Listing.save();
  }

  req.flash("success", "List edited success!");
  res.redirect(`/listings`);
};

//delete-route
module.exports.deleteList = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "List deleted success!");

  res.redirect(`/listings`);
};
