const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(connection) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize: connection, // ou sequelize apenas, desde
        // que esteja static init(sequelize)
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Address, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Address;
