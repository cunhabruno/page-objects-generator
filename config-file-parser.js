'use strict';
var path = require('path');
var configFileObj;
module.exports = {
    setConfigFileContent : function (configFilePath){
       configFileObj = require(path.resolve(configFilePath));
    },
    getConfigFileFilePath(){
        return(configFileObj.pageObjectsFolderPath);
    }
};