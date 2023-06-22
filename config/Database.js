const { Sequelize } = require("sequelize");
const mysql2 = require('mysql2')

//Membuat Koneksi Ke Database
const db = new Sequelize("railway", "root", "u23CELWvVFhWCaQaJCVo", {
    host: "containers-us-west-136.railway.app",
    port: "6499",
    dialect: "mysql",
    dialectModule: mysql2,
});

module.exports = db