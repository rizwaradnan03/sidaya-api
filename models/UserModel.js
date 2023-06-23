const {Sequelize} = require('sequelize')
const db = require('../config/Database')

const {DataTypes} = Sequelize

const Userr = db.define("user", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        required: true,
    },
    password: {
        type: DataTypes.STRING,
        required: true
    },
    token: {
        type: DataTypes.STRING,
    }
},{
    freezeTableName: true
})

module.exports = Userr;

(async () => {
    await db.sync()
    console.log('Success Migrate')
})()