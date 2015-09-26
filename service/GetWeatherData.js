var requestify = require('requestify');
var requestSite = "http://api.openweathermap.org/data/2.5/forecast?";

exports.GetWeatherData = {
    nameOfClass: "[GetWeatherData]",

    /*
    * @param coords.lat {Num}
    * @param coords.lon {Num}
    * @returns weatherObject
    */
    execute: function (coords, callback) {
        var functionName = "execute ";
        if(!coords.lat) {
            console.error(this.nameOfClass + functionName + 
            "Missing coords lat");
            return; 
        } 
        if(!coords.lon) {
            console.error(this.nameOfClass + functionName + 
            "Missing coords lon");
            return;
        }
        if(coords.lat > 90 || coords.lat < -90) {
            console.error(this.nameOfClass + functionName + 
            "Wrong coords lat " + coords.lat);
            return;   
        }
        if(coords.lon > 180 || coords.lon < -180) {
            console.error(this.nameOfClass + functionName + 
            "Wrong coords lon " + coords.lon);
            return;   
        }

        requestSite += "lat=" + coords.lat + "&";
        requestSite += "lon=" + coords.lon;
        
        requestify.get(requestSite)
        .then(function(response) {
                // Get the response body (JSON parsed or jQuery object for XMLs)
                callback(response.getBody());
            }
        );
    }
}