const { QueryTypes } = require("sequelize");
// const Pessoa = require("../models/Pessoa");

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

module.exports = {
  async store(req, res, next) {
    try {
      const sql = `
        select cadastra_cpf ('${req.body.nome}','${req.body.cpf}','${req.body.email}')`;

      const pessoa = await connection.query(sql, {
        type: QueryTypes.SELECT,
      });
      console.log(pessoa);
      // return res.json(pessoa, next);
      return res.status(200).json({ token: pessoa });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};

// if (!token)
//     return res.status(401).json({ auth: false, message: "No token provided." });
