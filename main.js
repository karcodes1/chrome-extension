// $(window).load(function()
// {
//    var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###) ###-##############"}];
//     $('#phoneInput').inputmask({ 
//         mask: phones, 
//         greedy: false, 
//         definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
// });

document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = [];

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    // Do something with url
    currentUrl.push(url);
  });

  document.getElementById("sendButton").addEventListener("click", getInfo);

  function getInfo() {
    //get the phone number
    const phoneNumber = document.getElementById("phoneInput").value;
    //get the URL
    //get the note
    const messageInput = document.getElementById("messageInput").value;
    //create string to send
    //call sendText
    const includeUrl = document.getElementById("includeUrl").value;
    let messageString = "\n";
    if(includeUrl === 'on'){
      messageString += currentUrl[0] + "\n";
    }
    messageString += messageInput;
    // alert(messageString);

    // var http = require("http");

    const data = JSON.stringify({
      phoneNum: "+1" + phoneNumber,
      message: messageString,
    });

    var option = {
      hostname: "127.0.0.1",
      port: 3000,
      method: "POST",
      path: "/",
    };

    // var request = http.request(option , function(resp){
    //         let data = '';
    //     resp.on("data",function(chunck){
    //         data += chunck;
    //     })
    //     })
    // request.write(data);
    // request.end();

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "127.0.0.1:3000", true);
//     // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhr.onload = function () {
//       // do something to response
//       alert(this.responseText);
//     };
//     xhr.send(data);
//   }

    const xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        JSON.parse(xmlHttpReq.responseText);
    };
    xmlHttpReq.open('POST','http://localhost:3000/', true); // true for asynchronous
    xmlHttpReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlHttpReq.send(data);
    }
});

