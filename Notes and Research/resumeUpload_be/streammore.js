var express  = require('express')
var fs = require('fs')
var app  = express()
var server = app.listen(8081, () => {
    console.log('Server is started on 127.0.0.1:8081')
})
app.get('/downloadFile/', (req, res) => {
  var files = fs.createReadStream("./ok.iso");
  var writableStream = fs.createWriteStream('./b.iso');
  var data = '';

  files.setEncoding('utf8');
  files.on('data', function(chunk) {
    writableStream.write(chunk);
  });

  res.end('Ended.');
})