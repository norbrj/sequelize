const { QueryTypes } = require("sequelize");
const Pessoa = require("../models/Pessoa");

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

module.exports = {
  async store(req, res) {
    try {
      const sql = `
        select cadastra_cpf ('${req.body.nome}','${req.body.cpf}','${req.body.email}')`;
      // SET name = '${input.name}', nickname = '${input.nickname}'
      // WHERE id = ${id};

      const pessoa = await connection.query(sql, {
        type: QueryTypes.SELECT,
      });
      return res.json(pessoa);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
