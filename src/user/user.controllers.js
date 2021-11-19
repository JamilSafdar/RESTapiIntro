const User = require("./user.model");

exports.addUser = async (req, res) => {
  try {
    // console.log(req.body);
    const newUser = new User(req.body);
    const token = await newUser.generateAuthToken();
    await newUser.save();
    res.status(200).send({ message: "success", newUser, token });
  } catch (error) {
    console.log(error);
    res.status(418).send({ message: "Something went wrong, check server logs" });
  }
};


exports.login = async(req, res) => {
    try {
     const token = await req.user.generateAuthToken()
        res.status(200).send({user: req.user, token});  
    } catch (error) {
        console.log(error);
    res.status(500).send({ message: "Something went wrong, check server logs" });
    }
};

exports.findUser = async (req, res) => {
	try {
		res.status(200).send(req.user);
	} catch (error) {
		res.status(500).send({ message: "Something went wrong, check server logs" });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		await User.findOneAndDelete(req.params);
		res.status(200).send({ Deleted: req.params });
	} catch (error) {
		res.status(500).send({ message: "Something went wrong, check server logs" });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const { email, password, ...updateValues } = req.body;
		const search = { email: email };
		await User.findOneAndUpdate(search, updateValues);
		res.status(200).send({ Updated: email });
	} catch (error) {
		res.status(500).send({ message: "Something went wrong, check server logs" });
	}
};