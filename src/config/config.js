const path = require("path");

module.exports = {
  port: process.env.PORT || "5432",
  db: {
    name: "d52bss5o3p56f9",
    user: process.env.DB_USER || "srmgaricyakylc",
    password: process.env.DB_PASS || "5b24602ba27758b15a092cadd2cfb83b579c28c180947991f1fdf396f6a6d6c2",


    options: {
      dialect: process.env.DIALECT || "postgres",
      host: process.env.HOST || "ec2-52-71-85-210.compute-1.amazonaws.com",
      storage: path.join(__dirname, "../../api-covid-ufrgs.sqlite"),
      native: true
    }
  }
};
