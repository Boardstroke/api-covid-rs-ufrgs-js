const path = require("path");
module.exports = {
  port: process.env.PORT || "8081",
  db: {
    name: "api-covid-ufrgs",
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASS || "admin",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.join(__dirname, "../../api-covid-ufrgs.sqlite")
    }
  }
};
