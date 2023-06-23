const { Sequelize } = require("sequelize");
const db = require('../config/Database')
const Species = require('./SpeciesModel')
const ActivityTemplate = require('./ActivityTemplateModel')

const { DataTypes } = Sequelize;

// membuat tabel di database
const Areas = db.define("area", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Species,
            key: 'id',
        },
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    activity_template_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: ActivityTemplate,
            key: 'id',
        }
    }
}, {
    freezeTableName: true
});

Areas.belongsTo(Species, {
    foreignKey: 'species_id',
});

Areas.belongsTo(ActivityTemplate, {
    foreignKey: 'activity_template_id',
});

module.exports = Areas;

// generate table
(async () => {
    await db.sync();
    console.log('Success Migrate')
})();