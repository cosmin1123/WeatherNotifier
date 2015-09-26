var Data = require('../database/Data.js');
var Place = require('../database/Place.js').Place;
var GetWeatherData = require('../service/GetWeatherData.js').GetWeatherData;

exports.Notifier = {
	data: undefined,
	start: function() {
		console.log("DADA");
		this.data = Data.read();
		console.log("NONO");
		// schedule next shit
		// call the checker
		console.log(this.data);
		for(var lat in this.data.places) {
			for(var lon in this.data.places[lat]) {
				var place = this.data.places[lat][lon];

				// Get data for place
				var realLat = lat > 1800? ((lat - 1800) / 10) : (lat / 10);
				var realLon = lon > 3600? ((lon - 3600) / 10) : (lon / 10);
				
				GetWeatherData.execute({lon: lon, lat: lat},
					function(data) {
						place.data = data;

						for(var i in place.userList) {
							var user = place.userList[i];
							console.log(user)
						}
					});
			} 
		}
	},
	add: function(userData, lat, lon) {
		if(lat < 0) {
			lat += 180;
		}
		if(lon < 0) {
			lon += 360;
		}

		lat = parseFloat( lat.toFixed(1) ) * 10;
		lon = parseFloat( lon.toFixed(1) ) * 10;

		console.log(lat);
		console.log(lon);

		if(!this.data.places[lat]) {
			this.data.places[lat] = [];
		}

		if(!this.data.places[lat][lon]) {
			this.data.places[lat][lon] = new Place(lon, lat);
		}

		this.data.places[lat][lon].userList.push(userData);

		Data.save(this.data);
	}
}