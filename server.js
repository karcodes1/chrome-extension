const http = require('http')

const server = http.createServer(function(request, response) {

    console.dir(request.param)
  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
    })
    request.on('end', function() {
      let bodyParse = JSON.parse(body);
      sendText(bodyParse.phoneNum, bodyParse.message);
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end(JSON.stringify('post received'))
    })
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)

var twilio = require('twilio');
// Find your account sid and auth token in your Twilio account Console.
var client = new twilio(
"ACf04f27b828fd0cb155d3d9b6bddf6114",
"0bc21e3ae79be9d7e2972ac9f9d457d1"
);

// Send the text message.
function sendText(phoneNum, body){
    client.messages.create({
        to: phoneNum,
        from: "+17199822617",
        body: body,
        });
}


// var express = require('express');
// var app = express();
// var path = require('path');

// app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html
// app.listen(3000); //listens on port 3000 -> http://localhost:3000/