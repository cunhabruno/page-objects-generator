"use strict";
let beautify = require('js-beautify').js_beautify;
module.exports = {
    getSeleniumJsString: function (objectsHash) {
        //console.log(objectsHash);
        let fileMap = '';
        for (let i = 0; i < objectsHash.length; i++) {
            fileMap += '\n\'' + objectsHash[i].varName + '\' : webDriver.By.' + this.parseAttributeNameAndValue(objectsHash[i].attributeName, objectsHash[i].value);
        }
        //Remove last comma
        fileMap = fileMap.replace(/,([^,]*)$/,'');
        let baseFile =
            '\'use strict\';\n' +
            'var webDriver = require(\'selenium-webdriver\');\n' +
            'module.exports = {' +
            fileMap +
            '\n};';
        baseFile = beautify(baseFile, { indent_size: 4 });
        return(baseFile);
    },

    parseAttributeNameAndValue: function(attributeName, attributeValue){
        if(attributeName === 'id' || attributeName === 'name'){
            return attributeName + '(\'' + attributeValue + '\'),';
        } else if(attributeName === 'class'){
            return 'className(\'' + attributeValue + '\'),';
        } else {
            return 'css' + '(\'[' + attributeName + '="' + attributeValue + '"]\'),';
        }
    }
};
