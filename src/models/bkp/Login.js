const { Model, DataTypes } = require("sequelize");

class Login extends Model {
  static init(connection) {
    super.init(
      {
        email: DataTypes.STRING,
        senha: DataTypes.INTEGER,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
        tableName: "login",
      }
    );
  }
}

module.exports = Login;
