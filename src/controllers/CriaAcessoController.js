const Acesso = require("../models/Acesso");

var bcrypt = require("bcryptjs");
// var jwt = require("jsonwebtoken");
module.exports = {
  async index(req, res) {
    const acesso = await Acesso.findAll();

    return res.json(acesso);
  },

  async store(req, res) {
    const { cpf, chave } = req.body;

    const acesso = await Acesso.create({
      cpf,
      chave,
    });

    return res.json(bcrypt.hashSync(chave, 8));

    // return res.json(
    //   jwt.sign({ id: senha }, "bezkoder-secret-key", {
    //     expiresIn: 86400,
    //   })
    // );
  },
};
