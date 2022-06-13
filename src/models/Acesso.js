const { Model, DataTypes } = require("sequelize");

class Acesso extends Model {
  static init(connection) {
    super.init(
      {
        cpf: DataTypes.STRING(11),
        chave: DataTypes.STRING(4),
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
      }
    );
  }
}

module.exports = Acesso;
