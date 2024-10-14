require("dotenv").config();
const path = require("path");

module.exports = {
  development: {
    dialect: "sqlite",
    storage: path.join(__dirname, "..", "database", "development.sqlite"),
    logging: false, // Matikan logging SQL jika diinginkan
  },
  test: {
    dialect: "sqlite",
    storage: path.join(__dirname, "..", "database", "test.sqlite"),
    logging: false,
  },
  production: {
    dialect: "sqlite",
    storage: path.join(__dirname, "..", "database", "production.sqlite"),
    logging: false,
  },
};
