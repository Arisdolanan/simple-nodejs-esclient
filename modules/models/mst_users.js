"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mst_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mst_users.init(
    {
      user_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      fullname: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      user_type: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      company: DataTypes.STRING,
      position: DataTypes.STRING,
      address: DataTypes.TEXT,
      signature_path: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      last_login: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "mst_users",
    }
  );

  // foreign key
  mst_users.associate = function (models) {
    mst_users.belongsTo(models.mst_role, {
      foreignKey: "role_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  // foreign key

  return mst_users;
};
