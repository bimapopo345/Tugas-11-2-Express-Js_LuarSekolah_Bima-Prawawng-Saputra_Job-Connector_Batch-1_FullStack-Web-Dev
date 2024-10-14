"use strict";
module.exports = (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define(
    "Mahasiswa",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jurusanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Jurusans",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {}
  );
  Mahasiswa.associate = function (models) {
    Mahasiswa.belongsTo(models.Jurusan, {
      foreignKey: "jurusanId",
      as: "jurusan",
    });
  };
  return Mahasiswa;
};
