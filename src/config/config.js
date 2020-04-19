const path = require("path");

module.exports = {
  port: process.env.PORT || "8081",
  db: {
    name: process.env.DB_NAME || "api_covid_ufrgs",
    user: process.env.DB_USER || "matheus",
    password: process.env.DB_PASS || "matheus",
    options: {
      dialect: process.env.DIALECT || "postgres",
      host: process.env.HOST || "localhost",//"ec2-52-71-85-210.compute-1.amazonaws.com",
      storage: path.join(__dirname, "../../api-covid-ufrgs.sqlite"),
      native: true,
      ssl: true
    }
  }
};
