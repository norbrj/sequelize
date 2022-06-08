const Login = require("../models/Login");

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
module.exports = {
  async index(req, res) {
    const login = await Login.findAll();

    return res.json(login);
  },

  async store(req, res) {
    const { email, senha } = req.body;

    const login = await Login.create({
      email,
      senha,
    });

    return res.json(bcrypt.hashSync(senha, 8));

    // return res.json(
    //   jwt.sign({ id: senha }, "bezkoder-secret-key", {
    //     expiresIn: 86400,
    //   })
    // );
  },
};
