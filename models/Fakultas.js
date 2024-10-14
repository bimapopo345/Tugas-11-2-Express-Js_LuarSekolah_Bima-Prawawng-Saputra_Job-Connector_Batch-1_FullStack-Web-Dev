"use strict";
module.exports = (sequelize, DataTypes) => {
  const Fakultas = sequelize.define(
    "Fakultas",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Fakultas.associate = function (models) {
    Fakultas.hasMany(models.Departemen, {
      foreignKey: "fakultasId",
      as: "departemens",
    });
  };
  return Fakultas;
};
