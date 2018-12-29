var express = require('express');
var app = express();
var request = require('request');
const bodyParser = require('body-parser');


const accountSid = "AC80cba24c3e603655f545782016c648c4";
const authToken= "c97c303718273588992aa0fd5e2cb92c";

const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/incoming', (req, res) => {
  console.log(req.body)
});


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(process.env.PORT || 3000)
  console.log('Your app is listening on port ' + listener.address().port);


