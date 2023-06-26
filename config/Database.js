const { Sequelize } = require("sequelize");
const mysql2 = require('mysql2')

//Membuat Koneksi Ke Database
const db = new Sequelize("sidaya_be", "root", "", {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    dialectModule: mysql2,
});

module.exports = db