"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const configPath = path.join(__dirname, "..", "config", "config.js");
const config = require(configPath)[process.env.NODE_ENV || "development"];
const db = {};

let sequelize;
sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
