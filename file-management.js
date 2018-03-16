'use strict';
const fs = require('fs');
const path = require('path');
module.exports = {
    createFileAndWrite: function (strFilePath, strFileName, strFileContent) {
        let file = path.join(strFilePath, strFileName);
        const fd = fs.openSync(file, 'w+');
        let buf = new Buffer(strFileContent);
        fs.writeSync(fd, buf, 0, buf.length, null);
        fs.closeSync(fd);
        console.log('File ' + file + ' created successfully');
    }
};