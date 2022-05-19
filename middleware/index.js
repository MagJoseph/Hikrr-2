//Imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Define Variables
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const APP_SECRET = process.env.APP_SECRET;

//Hash Password Function
const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

//Compare Password Function
const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword);
  return passwordMatch;
};

//Create JWT function
const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET);
  return token;
};

//Very Token Function
const verifyToken = (req, res, next) => {
  const { token } = res.locals;
  try {
    let payload = jwt.verify(token, APP_SECRET);
    if (payload) {
      res.locals.payload = payload;
      return next();
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  }
};

//Strip (read) JWT
const stripToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
      res.locals.token = token;
      return next();
    }
  } catch (error) {
    res.status(401).send({
      status: "error",
      msg: "Unauthorized",
    });
  }
};

//Exports
module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword,
};
