require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");
const port = process.env.PORT
sequelize.sync().then(() => {
  app.listen(port, () => console.log("Server running"));
});