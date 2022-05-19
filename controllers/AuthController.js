//Imports
const { User } = require("../models");
const middleware = require("../middleware");

//Login Function
const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true,
    });
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username,
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    throw error;
  }
};

//Register Function
const Register = async (req, res) => {
  try {
    let { password, email, firstName, lastName, username } = req.body;
    let passwordDigest = await middleware.hashPassword(password);
    password = passwordDigest;
    const user = await User.create({
      email,
      firstName,
      lastName,
      username,
      password,
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

//CheckSession Function
const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

//Exports
module.exports = {
  Login,
  Register,
  CheckSession,
};
