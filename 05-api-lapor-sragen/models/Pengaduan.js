const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Pengaduan = sequelize.define("Pengaduan", {
    judul: DataTypes.STRING,
    isi: DataTypes.STRING
})

module.exports = Pengaduan