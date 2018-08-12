const express = require('express');



var app = express();
var path = require('path');


app.use(express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/portfolio.html'));
});




// process.env.PORT
app.listen(process.env.PORT);

console.log('server is running')
