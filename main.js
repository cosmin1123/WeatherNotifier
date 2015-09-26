var GetWeatherData = require('./service/GetWeatherData.js').GetWeatherData;
var SendMail = require('./service/SendMail.js').SendMail;
var Data = require('./database/Data.js');
var UserData = require("./database/UserData.js").UserData;
var Notifier = require('./service/Notifier.js').Notifier;

//GetWeatherData.execute({lon: 47, lat:26});
//SendMail.execute("cosmin.didii@gmail.com", "YOOO buddy", "Notified have you been");
Notifier.start();
Notifier.add(new UserData("asd", "asd", "asdsaf", "asfaf"), 0.0145, 0.02353);
//Notifier.add(new UserData("asd", "asd", "asdsaf", "asfaf"), 180.0, 90.0);
Notifier.start();