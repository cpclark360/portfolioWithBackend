const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// add whitelist IP 0.0.0.0/0 in mongo altas

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;