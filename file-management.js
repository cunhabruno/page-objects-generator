'use strict';
const fs = require('fs');
const path = require('path');
module.exports = {
    createFileAndWrite: function (strFilePath, strFileName, strFileContent) {
        let file = path.join(strFilePath, strFileName);
        fs.open(file, 'w+', function (err, fd) {
            if (err) throw err;
            let buf = new Buffer(strFileContent);
            fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
                if (err) throw err;
                //console.log(err, written, buffer);
                fs.close(fd, function () {
                    console.log('File ' + file + ' created successfully');
                });
            });
        });
    }
};