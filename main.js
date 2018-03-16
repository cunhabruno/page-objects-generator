'use strict';
let DomReaderFuncs = require('./reder-funcs.js');
let writer = require('./page-objects.creator.js');
let fileMgmt = require('./file-management');
let configFileParser = require('./config-file-parser.js');
const path = require('path');
const program = require('commander');
let configFile;
program
    .version('0.0.1')
    .arguments('<filePath>')
    .action(function (filePath) {
        configFile = filePath;
    });

program.parse(process.argv);

if (typeof configFile === 'undefined') {
    console.error('No config file specified!');
    program.outputHelp();
} else {
    configFileParser.setConfigFileContent(configFile);
    configFileParser.getFilesToMap().forEach(function(item) {
        let elms = DomReaderFuncs.getAttributeArray(configFileParser.getLocatorsToMap(), item);
        if(elms.length > 0){
            fileMgmt.createFileAndWrite(configFileParser.getPageObjectsFolder(), path.basename(item) + '-objects.js', writer.getSeleniumJsString(elms));
        }else {
            console.log('No Elements found on file ' + item);
        }
    });
}