const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      process.env.MONGO_URI ||
        "mongodb+srv://raunakpandey:Raunak8585@cluster0.fxjofgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log(`MongoDB Connected`.cyan.underline))
    .catch((err) => {
      console.log(`Error: ${err.message}`.red.bold);
      process.exit();
    });
};

module.exports = connectDB;
