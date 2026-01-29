const { Sequelize } = require("sequelize")

// new Sequelize("NAMA DB","USER DB", "PASSWORD DB", {host:"host address", dialect:"RDBMS"})
const sequelize = new Sequelize("diskominfo_sragen", "root", "", { host: "localhost", dialect: "mysql" })