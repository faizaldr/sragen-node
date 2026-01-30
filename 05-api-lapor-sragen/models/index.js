const sequelize = require("../config/database")
const Pengaduan = require("./Pengaduan")
const User = require("./User")

// User.hasMany(Pengaduan)
// Pengaduan.belongsTo(User)

sequelize.sync()

module.exports = { sequelize, Pengaduan, User }