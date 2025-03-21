//requirements
const Listing = require("../models/listing.js");

module.exports.beachList = async (req, res) => {
  const beachProperties = await Listing.find({ category: "Beach" });
  res.render("categories/beach.ejs", { beachProperties });
};

module.exports.TrendList = async (req, res) => {
  const TrendProperties = await Listing.find({ category: "Trending" });
  res.render("categories/trend.ejs", { TrendProperties });
};

module.exports.farmList = async (req, res) => {
  const farm = await Listing.find({ category: "Farm" });
  res.render("categories/farm.ejs", { farm });
};

module.exports.MountList = async (req, res) => {
  const mountain = await Listing.find({ category: "Mountains" });
  res.render("categories/mountain.ejs", { mountain });
};

module.exports.cityList = async (req, res) => {
  const city = await Listing.find({ category: "City" });
  res.render("categories/city.ejs", { city });
};

module.exports.arcticList = async (req, res) => {
  const arctic = await Listing.find({ category: "Arctic" });
  res.render("categories/arctic.ejs", { arctic });
};

module.exports.riverList = async (req, res) => {
  const river = await Listing.find({ category: "Rivers" });
  res.render("categories/river.ejs", { river });
};

module.exports.containerList = async (req, res) => {
  const container = await Listing.find({ category: "Container" });
  res.render("categories/container.ejs", { container });
};

module.exports.viewList = async (req, res) => {
  const view = await Listing.find({ category: "Amazing Views" });
  res.render("categories/view.ejs", { view });
};

module.exports.roomList = async (req, res) => {
  const room = await Listing.find({ category: "Rooms" });
  res.render("categories/room.ejs", { room });
};

module.exports.boatList = async (req, res) => {
  const boat = await Listing.find({ category: "Boats" });
  res.render("categories/boat.ejs", { boat });
};

