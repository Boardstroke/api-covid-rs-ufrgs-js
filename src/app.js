const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

require("./routes")(app);

sequelize.sync().then(() => {
  app.listen(config.port);
});
