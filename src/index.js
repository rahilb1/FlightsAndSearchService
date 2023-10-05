const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index.js");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    // to sync db manually when not using migrations and to expose functions
    // if (process.env.SYNC_DB) {
    //   db.sequelize.sync({ alter: true });
    // }
  });
};

setupAndStartServer();
