// json.js
//
// In Class Exercise
//
// Robert Hieger

var myJSON = '{ "hello": "world", "foods": [  { "name": "burger" }, { "name": "fries" } ] }';

var parsedJSON = JSON.parse(myJSON);

console.log(parsedJSON);

console.log(parsedJSON.hello);

console.log(parsedJSON.foods[1].name);