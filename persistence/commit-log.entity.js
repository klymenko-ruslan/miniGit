var Sequelize = require('sequelize');
var sequelize = require("./sequelize.js").getSequelize();

var CommitLog = sequelize.define('commit_log', {
    addedFileId: {
        type: Sequelize.STRING
    },
    commitId: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});



module.exports = {
    getCommitLog: function() {
      //  CommitLog.sync({force: true});
        return CommitLog;
    }
}