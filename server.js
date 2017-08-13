var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/projecttwo.html', function (req, res) {
   res.sendFile( __public + "/" + "/projecttwo.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name,
      mail:req.query.mail
      };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Server is online! At http://localhost:8081")

})
