var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', 'test', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = {
    getSequelize: function() {
        return sequelize;
    }
}