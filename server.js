const express = require("express");
//const bodyParser = require("body-parser");
const callHandle = require('./call_handler.js');
const app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('voice', function(request, response) {
    callHandle(request);
});

app.get('/', function(request, response) {
    response.status(200).end('Hello World')
})

app.listen(80, function() {
    console.log("Started on PORT 80");
})
