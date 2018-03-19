# page-objects-generator
This module generates the objects mapping file for selenium atomation code.
## Basic usage
To use page-objects-generator you will need a runner file like this one:
```js
'use strict';

module.exports = {
    pageObjectsFolderPath: './test/page-objects', //add here the path where your selenium mapping are, to save mapped objects.
    filesToMap: ['test/', 'bin/jimmy'], // Add here files or path to the application html files.
    locatorsToMap: ['id', 'data-etoe', 'name', 'class'] // Add here wich locators you want to map.
};
```
Running the file:
```
node main.js runner.conf.js
```
