var Sequelize = require('sequelize');
var sequelize = require("./sequelize.js").getSequelize();

var Commit = sequelize.define('commit', {
    branchId: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});



module.exports = {
    getCommit: function() {
       // Commit.sync({force: true});
        return Commit;
    }
}