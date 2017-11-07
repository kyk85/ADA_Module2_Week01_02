var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
//console.log("Program Ended");

fs.writeFile('input.txt', 'This is input.txt', function(err){
	if (err) {
		console.log("ERROR")
	}
	console.log("input.txt has been modified")
})


/*fs.readFile('input2.txt', function(err,data){
	if (err) {
		console.log("ERROR");
	} 
	else {
		console.log(data.toString());
	}
});

console.log("Program supposed to end for async");*/