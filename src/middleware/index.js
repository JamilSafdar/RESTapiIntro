const bcrypt = require("bcryptjs");
const User = require("../user/user.model");
const jwt = require('jsonwebtoken');

exports.hashPassword = async (req, res, next) => {
  try {
    const pass = req.body.password;
    const hashedPass = await bcrypt.hash(pass, 7);
    req.body.password = hashedPass;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server error message logs" });
  }
};

exports.comparePasswords = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (await bcrypt.compare(req.body.password, user.password)) {
      req.user = user;
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server error message logs" });
  }
};

exports.tokenAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const noBearerToken = token.replace('Bearer', '');
    const tokenObj = jwt.verify(noBearerToken, process.env.SECRET);
    console.log(tokenObj);

    const user = await User.findOne({_id: tokenObj.id});
    if(!req.user) {
      throw new Error();
    }
    console.log(tokenObj);
    req.user = user;
      next();
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server error message logs" });
  }
};