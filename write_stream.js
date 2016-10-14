var fs = require("fs");
var data = 'Simple easy learning';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data,'UTF-8');
writeStream.end();

writeStream.on('finish', function(){
	console.log("Write Completed.");
});

writeStream.on('error', function(err){
	console.log(err.stack);
});

console.log('program ended');
