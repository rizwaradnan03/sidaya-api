const { Sequelize } = require("sequelize");
const db = require('../config/Database')
const ActivityTemplate = require('./ActivityTemplateModel')
const Supply = require('./SupplyModel')

const { DataTypes } = Sequelize;

// membuat tabel di database
const ActivitySupplyTemplate = db.define("activity_supply_template", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    activity_template_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: ActivityTemplate,
            key: 'id'
        }
    },
    supply_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Supply,
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

ActivitySupplyTemplate.belongsTo(ActivityTemplate, { foreignKey: 'activity_template_id' })
ActivitySupplyTemplate.belongsTo(Supply, { foreignKey: 'supply_id' })

module.exports = ActivitySupplyTemplate;

// generate table
(async () => {
    await db.sync();
    console.log('Success Migrate')
})();