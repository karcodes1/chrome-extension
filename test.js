var http = require('http');

const data = JSON.stringify({
    phoneNum : '+15124203998',
    message : 'test'
});

var option = {
    hostname : "127.0.0.1" ,
    port : 3000,
    method : "POST",
    path : "/"
} 

var request = http.request(option , function(resp){
        let data = '';
       resp.on("data",function(chunck){
           data += chunck;
       })
    })
    request.write(data);
    request.end();
