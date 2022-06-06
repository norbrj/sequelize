const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    //Encontrar todos usuarios que tem email quer termina com @gmail.com
    // Desses usuarios eu quero buscar todos que moram na rua "teste"
    // Desses usuario eu quero buscar as tecnologias que começam com React

    const user = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.ilike]: "@gmail.com",
        },
      },
      include: [
        { association: "addresses", where: { street: "Rua teste" } },
        {
          association: "techs",
          requeired: false,
          where: {
            name: {
              [Op.ilike]: "React%",
            },
          },
        },
      ],
    });
  },
};
