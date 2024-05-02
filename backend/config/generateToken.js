const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "raunak", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
