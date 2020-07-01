var express  = require('express')
var app  = express()
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
var server = app.listen(8081, () => {
    console.log('Server is started on 127.0.0.1:8081')
})
app.get('/downloadFile/', (req, res) => {
  res.download('./Ayeshmantha.pdf');
})


//cpu usage is very high memory was ok 
//downloads the file in the same format