var Sequelize = require('sequelize');
var sequelize = require("./sequelize.js").getSequelize();

var File = sequelize.define('file', {
    status: {
        type: Sequelize.STRING
    },
    fileLocation: {
        type: Sequelize.STRING
    },
    fileLocationOriginal: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});



module.exports = {
    getFile: function() {
      //  File.sync({force: true});
        return File;
    }
}