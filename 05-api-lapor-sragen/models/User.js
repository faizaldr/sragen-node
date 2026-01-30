const { DataType, DataTypes } = require("sequelize")
const sequelize = require('../config/database')
const ROLE = require("../config/role")
const User = sequelize.define('User', {
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    role : DataTypes.ENUM(ROLE.ADMIN, ROLE.USER)
})

module.exports = User