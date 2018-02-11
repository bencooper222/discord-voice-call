const twiml = require('twilio').twiml;
const VoiceResponse = twiml.VoiceResponse;

const sayHello = function(request) {
    const phone = request.body.From;

    const response = new VoiceResponse();
    response.say('Hello World');
    response.play('https://api.twilio.com/Cowbell.mp3');
    response.send(twiml.toString());

}

module.exports = sayHello;
