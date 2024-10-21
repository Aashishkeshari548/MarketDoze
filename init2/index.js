const mongoose = require("mongoose");
const Listing2 = require("../models/listing2.js");
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
    await Listing2.deleteMany({});
    initData.data2=initData.data2.map((obj)=>({...obj,owner:'67010c8e2214553daf1930b5'}))//ower property ko initilize karne ke liye
    await Listing2.insertMany(initData.data2);
    console.log("data was initialized")
}
initDb();