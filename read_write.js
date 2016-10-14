var fs = require('fs');

console.log("GOing to open file!");

fs.open('input.txt', 'r+', function(err, fd){
	if(err){
		return console.log(err);
	}
	console.log("File opened successfully");
});
