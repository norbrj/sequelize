import { QueryTypes } from "sequelize";
const Login = require("../models/Login");

export const addAcesso = async (req, res) => {
  try {
    const records = await db.query(
      "select acesso(" + req.params.cpf + "," + req.params.chave + ")",
      {
        type: QueryTypes.SELECT,
      }
    );
    res.json(records[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// v
// module.exports = {
//   async index(req, res) {
//     const login = await Login.findAll();

//     return res.json(login);
//   },

//   async store(req, res) {
//     const { email, senha } = req.body;

//     const login = await Login.create({
//       email,
//       senha,
//     });

//   },
// };
