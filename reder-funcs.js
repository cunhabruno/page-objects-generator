'use strict';
const jsdom = require("jsdom");// jsdom <= 9.x
const {JSDOM} = jsdom;
const fs = require('fs');
module.exports = {
    getAttributeArray: function (attributeArray, htmlFilePath) {
        console.log('\nGetting attributes for file' + htmlFilePath);
        let contents = fs.readFileSync(htmlFilePath, 'utf8');
        const dom = new JSDOM(contents);
        let attributesArray = [];
        for (let attribute of attributeArray) {
            let attributes = dom.window.document.querySelectorAll('[' + attribute + ']');
            //console.log(dom.serialize());
            console.log('There are ' + attributes.length + ' attribute(s) of type "' + attribute + '" on file: ' + htmlFilePath);
            for (let i = 0; i < attributes.length; i++) {
                attributesArray.push(
                    {
                        attributeName: attribute,
                        varName: attributes.item(i).getAttribute(attribute) + attributes.item(i).tagName.toLowerCase(),
                        value: attributes.item(i).getAttribute(attribute)
                    }
                );
            }
        }
        dom.window.close();
        return attributesArray;
    },
};