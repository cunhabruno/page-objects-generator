# page-objects-generator
This module generates the objects mapping file for selenium atomation code.
## Basic usage
To use page-objects-generator you will need a runner file like this one:
```js
'use strict';

module.exports = {
    pageObjectsFolderPath: './test/page-objects', //add here the path where your selenium mapping are, to save mapped objects.
    filesToMap: ['my-app/index.html', 'my-app/app-html-files'], // Add here files or path to the application html files.
    locatorsToMap: ['id', 'data-etoe', 'name'] // Add here wich attributes you want to map.
};
```
Running the file:
```
node main.js runner.conf.js
```
