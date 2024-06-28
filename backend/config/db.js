const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var db=mongoose.connection;
try {
    db.on("error", console.error.bind(console, "Connecton error"));
    db.once("open", function () {
        console.log("mongoDB connected");
    });
} catch (err) {
    console.log(err);
}
module.exports = db;