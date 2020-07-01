var express  = require('express')
var fs = require('fs')
var app  = express()
var server = app.listen(8082, () => {
    console.log('Server is started on 127.0.0.1:8082')
})
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Expose-Headers', "x-zowe-filesize");
  next();
}
app.use(allowCrossDomain);
app.get('/downloadFile/', (req, res) => {
  var files = fs.createReadStream("./ok.iso");
  res.writeHead(200, {'Content-disposition': 'attachment; filename=Ayeshmantha.pdf', 'X-zowe-filesize': 2715254784}); //here you can add more headers
  files.pipe(res)
})