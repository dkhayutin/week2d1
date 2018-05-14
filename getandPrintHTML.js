var https = require('https');

function getAndPrintHTML () {

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function(response) {

  response.setEncoding('utf8');
  response.on('data', function (data) {

  console.log('chuck received. Length:', data)
  var newData = []
  newData += data;
  console.log(newData)
 })


response.on('end', function() {
console.log('Respone Stream Complete');

  });
});
}
getAndPrintHTML()
