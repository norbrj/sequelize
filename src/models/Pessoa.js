const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {
  static init(connection) {
    super.init(
      {
        cpf: DataTypes.STRING(11),
        nome: DataTypes.STRING,
        rg: DataTypes.STRING(10),
        emissor: DataTypes.STRING(30),
        data_nascimento: DataTypes.DATE,
        nome_social: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
      }
    );
  }
}

module.exports = Pessoa;
