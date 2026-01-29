const sequelize = require("../config/database")
const Pengaduan = require("./Pengaduan")

sequelize.sync()

module.exports = { sequelize, Pengaduan }