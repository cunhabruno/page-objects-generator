"use strict";
let fs = require('fs');
var beautify = require('js-beautify').js_beautify;
module.exports = {
    getSeleniumJsString: function (strPageName, objectsHash) {
        let fileMap = '';
        for (let i = 0; i < objectsHash.length; i++) {
            fileMap += '\n\'' + objectsHash[i].varName + '\' : webDriver.By.' + objectsHash[i].attributeName + '(\'' + objectsHash[i].value + '\'),';
        }
        let fileName = strPageName + '-objects.js';
        let baseFile =
            '\'use strict\';\n' +
            'var webDriver = require(\'selenium-webdriver\');\n' +
            'module.exports = {' +
            fileMap +
            '\n};';
        baseFile = beautify(baseFile, { indent_size: 4 });
        return(baseFile);
    }
};
