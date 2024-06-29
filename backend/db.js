const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
// con
mongoose.connect(
  "mongodb+srv://omtrivedioo3:JT0I0kydNMFMtfay@cluster0.qfcbzt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    // useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//  password : 78wXMxojl1rc0rSZ

var db = mongoose.connection;
try {
  db.on("error", console.error.bind(console, "Connecton error"));
  db.once("open", function () {
    console.log(URL);
    console.log("mongoDB connected");
  });
} catch (err) {
  console.log(err);
}

module.exports = db;
// JT0I0kydNMFMtfay
