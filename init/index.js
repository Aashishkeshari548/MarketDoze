const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");


const mongoUrl = "mongodb://127.0.0.1:27017/marketdoze";
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
const initDb=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'67010c8e2214553daf1930b5'}))//ower property ko initilize karne ke liye
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
}
initDb();