const { Sequelize } = require("sequelize");
const db = require('../config/Database')
const Supply = require('./SupplyModel')
const Activity = require('./ActivityModel')

const { DataTypes } = Sequelize;

// membuat tabel di database
const ActivitySupply = db.define("activity_supply", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    supply_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Supply,
            key: 'id'
        }
    },
    activity_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Activity,
            key: 'id'
        }
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

ActivitySupply.belongsTo(Supply, { foreignKey: 'supply_id' })
ActivitySupply.belongsTo(Activity, { foreignKey: 'activity_id' })

module.exports = ActivitySupply;

// generate table
// (async () => {
//     await db.sync();
//     console.log('Success Migrate')
// })();