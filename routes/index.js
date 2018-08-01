var express = require('express');
var router = express.Router();
var file = require('../persistence/file.entity').getFile();

file.create({
    status: 'Added',
    fileLocation: '/home/git/projectname/branchname/rklymenko/startup.sh',
    fileLocationOriginal: '/home/rklymenko/startup.sh',
});

var branch = require('../persistence/branch.entity').getBranch();

branch.create({
    fromCommitId: 'fromCommitId',
    name: 'firstBranch',
    projectId: '1',
    status: 'active',
});

var commit = require('../persistence/commit.entity').getCommit();

commit.create({
    status: 'Added',
    branchId: '1',
});

var commitLog = require('../persistence/commit-log.entity').getCommitLog();

commitLog.create({
    addedFileId: '1',
    commitId: '1'
});

/* GET home page. */
router.get('/', function(req, res, next) {
    //getFromDatabase();
    res.render('index', { title: 'Express' });
});
module.exports = router;
