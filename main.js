//jimmy folder or file where obj are saved
//jimmy test/index.html id data-etoe
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
        /*DomReaderFuncs.getAttributeArray(configFileParser.getLocatorsToMap(), item).then(function (elms) {
            if(elms.length > 0){
                fileMgmt.createFileAndWrite(configFileParser.getPageObjectsFolder(), path.basename(item) + '-objects.js', writer.getSeleniumJsString(elms));
            }else {
                console.log('No Elements found on file ' + item);
            }
        });*/
    });
}

/*process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});
var configFile = require('./' + process.argv.slice(2).toString());
console.log(configFile.pageObjectsFolderPath);*/
/*fs.readFile(process.argv.slice(2).toString(), 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
    console.log(obj);
});*/

/*var json = JSON.parse(fs.readFileSync(process.argv.slice(2).toString(), 'utf8'));
console.log(json);*/
/*
DomReaderFuncs.getAttributeArray('id', './test/index.html').then(function (elms) {
    fileMgmt.createFileAndWrite('./', 'tet.js', writer.getSeleniumJsString('pagename', elms));
});*/