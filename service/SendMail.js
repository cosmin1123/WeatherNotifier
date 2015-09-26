var nodemailer = require("nodemailer");

exports.SendMail = {
    nameOfClass: "[SendMail]",
	smtpTransport: 
		nodemailer.createTransport("SMTP",{
		service: "Gmail",
		auth: {
			user: "notifiernownoreply@gmail.com",
			pass: "NotifierNowNoReplyparolamea1123"
		}
	}),
    /*
    * @param targetMail {String}
    * @param htmlData {String}
    * @param title {String}
    */
    execute: function (targetMail, htmlData, title) {
        var functionName = "execute ";
		this.smtpTransport.sendMail({
			from: "notifiernownoreply@gmail.com", // sender address
			to: targetMail, // comma separated list of receivers
			subject: title, // Subject line
			html: htmlData // plaintext body
		},  
		function(error, info){
			if(error){
				return console.log(error);
			}
			console.log('Message sent: ' + info.response);
		});
        
    }
}