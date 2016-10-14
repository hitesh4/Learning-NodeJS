var fs = require('fs');

console.log("Going to get file info!");

fs.stat('input.txt', function(err, stats){
	if(err){
		return console.log(err);
	}
	console.log(stats);
	console.log("Got file info successfully!");

	console.log("isFile ?" + stats.isFile());
	console.log("isDirectory ? " + stats.isDirectory());
});
