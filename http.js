var express = require('express')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, './')))

var server = app.listen(4300, function (req, res) {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
