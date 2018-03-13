'use strict';
const path = require('path');
const fs = require('fs');
let configFileObj;
module.exports = {
    setConfigFileContent: function (configFilePath) {
        configFileObj = require(path.resolve(configFilePath));
    },
    getLocatorsToMap() {
        return (configFileObj.locatorsToMap);
    },
    getPageObjectsFolder() {
        return (configFileObj.pageObjectsFolderPath);
    },
    getFilesToMap() {
        let stats = '';
        let filesArray = [];
        for (let filePath of configFileObj.filesToMap) {
            stats = fs.statSync(filePath);
            if(stats.isDirectory()) {
                fs.readdirSync(filePath).forEach(function(file) {
                    filesArray.push(path.join(filePath, file));
                });
            } else if(stats.isFile()) {
                filesArray.push(filePath);
            }
        }
        return filesArray;
    }
};