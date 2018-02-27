//jimmy folder or file where obj are saved
//jimmy test/index.html id data-etoe
'use strict';
var DomReaderFuncs = require('./reder-funcs.js');
var writer = require('./page-objects.creator.js');
var fileMgmt = require('./file-management');
var fs = require('fs');
var configFileParser = require('./config-file-parser.js');
const program = require('commander');
var configFile;
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
        DomReaderFuncs.getAttributeArray(configFileParser.getLocatorsToMap(), item).then(function (elms) {
            fileMgmt.createFileAndWrite('test/', 'tet.js', writer.getSeleniumJsString('pagename', elms));
        });
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