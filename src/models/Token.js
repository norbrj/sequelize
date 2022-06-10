const { Model, DataTypes } = require("sequelize");

class Token extends Model {
  static init(connection) {
    super.init(
      {
        cpf: DataTypes.STRING,
        token: DataTypes.INTEGER,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
        tableName: "token",
      }
    );
  }
}

module.exports = Token;
