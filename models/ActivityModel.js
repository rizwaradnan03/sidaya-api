const { Sequelize } = require("sequelize");
const db = require('../config/Database')
const Periode = require('./PeriodeModel')

const { DataTypes } = Sequelize;

// membuat tabel di database
const Activity = db.define("activity", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    related_area: {
        type: DataTypes.STRING,
        allowNull: true
    },
    periode_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Periode,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
});

Activity.belongsTo(Periode, { foreignKey: 'periode_id' })

module.exports = Activity;

// generate table
(async () => {
    await db.sync();
    console.log('Success Migrate')
})();