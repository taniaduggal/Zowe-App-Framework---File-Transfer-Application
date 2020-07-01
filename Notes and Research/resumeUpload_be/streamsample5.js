var http = require("http");
var fs = require("fs");
var filename = "./ok.iso";

var serv = http.createServer(function (req, res) {
    var stat = fs.statSync(filename);
    res.writeHeader(200, {"Content-Length": stat.size});
    var fReadStream = fs.createReadStream(filename);
    fReadStream.on('data', function (chunk) {
       if(!res.write(chunk)){
           fReadStream.pause();
       }
   });
   fReadStream.on('end', function () {
      res.end();
   });
   res.on("drain", function () {
      fReadStream.resume();
   });
});

serv.listen(8888);