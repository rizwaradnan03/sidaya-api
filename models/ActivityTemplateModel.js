const { Sequelize } = require("sequelize");
const db = require('../config/Database')

const { DataTypes } = Sequelize;

// membuat tabel di database
const ActivityTemplate = db.define("activity_template", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = ActivityTemplate;

// generate table
// (async () => {
//     await db.sync();
//     console.log('Success Migrate')
// })();