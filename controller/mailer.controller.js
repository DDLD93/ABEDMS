
const mailgun = require("mailgun-js")



module.exports = (broker) => {
	;
	const DOMAIN = "sandboxc8a133a0089740febbf341b6bfbb43f1.mailgun.org";
	const mg = mailgun({
		apiKey: "c37a2951387326df3165df1f8b814793-53ce4923-5568f557",
		domain: DOMAIN
	});
	broker.getMsg((msg) => {
		broker.channel.ack(msg)
		let message = JSON.parse(msg.content.toString())
		console.log(message)
	
			broker.getMsg((msg) => {
				broker.channel.ack(msg)
				let message = JSON.parse(msg.content.toString())
				console.log(message)
				const data = {
					from: "Mailgun Sandbox <postmaster@sandboxc8a133a0089740febbf341b6bfbb43f1.mailgun.org>",
					to: "ujere@ddld.info",
					subject: "TESTING",
					text: `HELLO Mr ${message.name} this your mail test`
				};
				mg.messages().send(data, function (error, body) {
					console.log(body);
					console.log("error >>>>>> ", error)
				});
			})
		})
}