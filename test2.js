var twilio = require('twilio');
// Find your account sid and auth token in your Twilio account Console.
var client = new twilio(
"ACf04f27b828fd0cb155d3d9b6bddf6114",
"0bc21e3ae79be9d7e2972ac9f9d457d1"
);

client.messages.create({
    to: "+15208617218",
    from: "+17199822617",
    body: "test",
    });