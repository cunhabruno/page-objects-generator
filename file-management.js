'use strict';
const fs = require('fs');

module.exports = {
    createFileAndWrite: function (strFilePath, strFileName, strFileContent) {
        fs.open(strFilePath + '/' + strFileName, 'w+', function (err, fd) {
            if (err) throw err;
            let buf = new Buffer(strFileContent);
            fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
                if (err) throw err;
                console.log(err, written, buffer);
                fs.close(fd, function () {
                    console.log('Done');
                });
            });
        });
    }
};