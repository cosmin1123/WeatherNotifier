var fs = require("fs");

exports.save = function(dataJson, yourCallback) {
	var data = JSON.stringify(dataJson);

	fs.writeFileSync('./database/data.json', data , 'binary');
}

exports.read = function() {
	var rawData = fs.readFileSync("./database/data.json", "binary");
	console.log(rawData);
	console.log(Boolean(rawData));
	var data = rawData || {};

	data = data || {};
	if(!data.places) {
		data.places = [];
	}

	return data;
}