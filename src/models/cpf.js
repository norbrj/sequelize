const { Model, DataTypes } = require("sequelize");

class Cpf extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        chave: DataTypes.STRING,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
      }
    );
  }
}

module.exports = Cpf;
