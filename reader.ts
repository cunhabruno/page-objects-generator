'use strict';
const fs = require('fs');
require('jsdom-global')();
/*fs.readFile('./test/index.html', (err, data) => {
    if (err) throw err;
    //console.log(data.toString());

    //let parser = new DOMParser();
    //let doc = parser.parseFromString(data.toString(), "text/html");
    //let  paragraphs = doc.querySelectorAll('p');
    //console.log(paragraphs);
});*/

/*var jsdom;
try {
    jsdom = require("jsdom/lib/old-api.js"); // jsdom >= 10.x
} catch (e) {
    jsdom = require("jsdom"); // jsdom <= 9.x
}
const { JSDOM } = jsdom;
jsdom.env({
    file: './test/index.html',
    done: function (err, window) {
        document = window.document;
        // now you can work on parsing HTML as you normally would in a browser
        // e.g. this will work
        showTables();
    }
});
function showTables() {
    let ids = document.querySelectorAll('[id]');
    console.log("there are ", ids.length, " ids");
    console.log(ids.item(1).getAttribute('id'));
}*/
const jsdom = require("jsdom"); // jsdom <= 9.x
const { JSDOM } = jsdom;
JSDOM.fromFile("./test/index.html", "text/html").then(dom => {
    console.log(dom.serialize());
    let ids = dom.window.document.querySelectorAll('[id]');
    console.log("there are ", ids.length, " ids");
    console.log(ids.item(1).getAttribute('id'));
});