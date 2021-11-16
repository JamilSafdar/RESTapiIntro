const User = require('./user.model');

exports.addUser = async (req, res) => {
    try {
      // console.log(req.body);

      const newUser = new User(req.body);
          await newUser.save();
    res.status(200).res.send({message: 'success'});  
    } catch (error) {
        console.log(error)
        res.status(418).send({message: 'Something went wrong, check server logs'});
    }
};