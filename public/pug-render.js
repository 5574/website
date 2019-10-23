const pug = require('pug');

const JSON = require("json")

const compiledFunction = pug.compileFile('/public/index-table.pug');

//import json data store
let jsonStore = require("/public/DataStore.json")

console.log(jsonStore)

const stuff = compiledFunction({
  name: 'Timothy'
});

console.log(jsonStore.gigs)