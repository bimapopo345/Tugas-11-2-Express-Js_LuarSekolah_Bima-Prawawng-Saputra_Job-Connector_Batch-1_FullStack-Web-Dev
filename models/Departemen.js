"use strict";
module.exports = (sequelize, DataTypes) => {
  const Departemen = sequelize.define(
    "Departemen",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fakultasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Fakultas",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {}
  );
  Departemen.associate = function (models) {
    Departemen.belongsTo(models.Fakultas, {
      foreignKey: "fakultasId",
      as: "fakultas",
    });
    Departemen.hasMany(models.Jurusan, {
      foreignKey: "departemenId",
      as: "jurusans",
    });
  };
  return Departemen;
};
