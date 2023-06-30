const { Sequelize } = require("sequelize");
const db = require('../config/Database')

const { DataTypes } = Sequelize;

// membuat tabel di database
const ActivityTemplateDetail = db.define("activity_template_detail", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nth_day: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_global_activity: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    freezeTableName: true
});

module.exports = ActivityTemplateDetail;

// generate table
(async () => {
    await db.sync();
    console.log('Success Migrate')
})();