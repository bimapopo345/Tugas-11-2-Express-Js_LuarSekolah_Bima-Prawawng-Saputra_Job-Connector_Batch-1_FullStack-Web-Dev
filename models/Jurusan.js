"use strict";
module.exports = (sequelize, DataTypes) => {
  const Jurusan = sequelize.define(
    "Jurusan",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departemenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Departemens",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {}
  );
  Jurusan.associate = function (models) {
    Jurusan.belongsTo(models.Departemen, {
      foreignKey: "departemenId",
      as: "departemen",
    });
    Jurusan.hasMany(models.Mahasiswa, {
      foreignKey: "jurusanId",
      as: "mahasiswas",
    });
  };
  return Jurusan;
};
