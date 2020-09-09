const userCtrl = {};

userCtrl.getUsers = (req, res) => res.send("Users Routes");

userCtrl.createUser = (req, res) => res.send("User Creted");

userCtrl.deleteUser = (req, res) => res.send("User Eliminated");

module.exports = userCtrl;
