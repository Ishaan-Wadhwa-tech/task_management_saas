const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM("pending", "completed"),
    defaultValue: "pending",
  },
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;