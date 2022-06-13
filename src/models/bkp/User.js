const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });

    this.belongsToMany(models.Tech, {
      foreignKey: "user_id",
      through: "user_techs",
      as: "techs",
    });
  }
}

module.exports = User;
