const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB Connected`.cyan.underline))
    .catch((err) => {
      console.log(`Error: ${err.message}`.red.bold);
      process.exit();
    });
};

module.exports = connectDB;
