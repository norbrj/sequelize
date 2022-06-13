const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
        tableName: "techs", /// forcando para evitar a pluralização do sequelize
        ///  que colocaria como 'teches'
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "tech_id",
      through: "user_techs",
      as: "users",
    });
  }
}

module.exports = Tech;
