var Sequelize = require('sequelize');
var sequelize = require("./sequelize.js").getSequelize();

var Branch = sequelize.define('branch', {
    name: {
        type: Sequelize.STRING
    },
    fromCommitId: {
        type: Sequelize.STRING
    },
    projectId: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});



module.exports = {
    getBranch: function() {
        //Branch.sync({force: true});
        return Branch;
    }
}