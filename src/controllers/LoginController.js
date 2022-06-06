const Login = require("../models/Login");

module.exports = {
  async index(req, res) {
    const login = await Login.findAll();

    return res.json(login);
  },

  async store(req, res) {
    const { email, senha } = req.body;

    const login = await Login.create({ email, senha });

    return res.json(login);
  },
};
