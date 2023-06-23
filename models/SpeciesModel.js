const { Sequelize } = require("sequelize");
const db = require('../config/Database')

const { DataTypes } = Sequelize;

// membuat tabel di database
const Species = db.define("species", {
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

module.exports = Species;

// generate table
(async () => {
    await db.sync();
    console.log('Success Migrate')
})();