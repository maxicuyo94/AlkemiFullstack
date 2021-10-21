const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("operation", {
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("entry", "egress"),
      allowNull: false,
    },
  });
};
