// generateHTML.js

var marked = require('marked');

var fs = require('fs');

var assignment2_and_3 = fs.readFileSync('../assignment-2-and-3.md', 'utf-8');

var markDownAssignment2_and_3 = marked(assignment2_and_3);

fs.writeFileSync('../assignment-2-and-3.html', markDownAssignment2_and_3);
