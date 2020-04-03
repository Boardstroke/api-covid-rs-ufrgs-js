const path = require("path");
module.exports = {
  port: "8081",
  db: {
    name: "api-covid-ufrgs",
    user: "admin",
    password: "admin",
    options: {
      dialect: "sqlite",
      host: "localhost",
      storage: path.join(__dirname, "../../api-covid-ufrgs.sqlite")
    }
  }
};
