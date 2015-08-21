var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

var port = process.env.VCAP_APP_PORT || 3003

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(port);