//calling on instance of express to be run
var express = require('express');
//every instace of app is calling on a module of express to be used
var app = express();
//every instance of function (req, res) is a kind of command and control,
//representing the request and resposne of the HTML, requesting the what
//and what the response should be

//express.static is used to point to a folder in the dir to serve files from
app.use(express.static('public'));
//telling express to get the projecttwo.html file
app.get('/projecttwo.html', function (req, res) {
   res.sendFile( __public + "/" + "/projecttwo.html" );
})

//using the GET function in order to grab data from the form
//note that in HTML file, form action is set to http://localhost:8081/process_get
app.get('/process_get', function (req, res) {
   // this is in order to prep the data and convert to JSON so can be read
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name,
      mail:req.query.mail
      };
    //telling console to display the response
   console.log(response);
   //when the response ends this is what needs to fire, JSON to display text
   res.end(JSON.stringify(response));
})
//telling the script to send Hello World when going to 8081 outright
app.get('/', function (req, res) {
   res.send('Hello World');
})

//setting up the server to listen to port 8081
var server = app.listen(8081);
console.log("Server is online! At http://localhost:8081");
