var express = require('express');
var app = express();

// handler function - receives requests and tells the server how to respond to them
// .get takes two parameters - the end point and the handler function
app.get('/', function(req, res) {
  // .send - sends information back to the client from the server
  res.send("Yay node girls!");
});

// tells express to use a certain piece of middleware - in this case express static
app.use(express.static("public"));

app.listen(3000, function() {
  console.log('app listening on port 3000!')
});
