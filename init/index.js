const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WanderLust");
}

main()
  .then((res) => {
    console.log("succeed");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owener: "67b8ae4b1dac027796dbedde",
  }));
  await listing.insertMany(initData.data); //object.data
  console.log("data was initialized.");
};

initDB();
