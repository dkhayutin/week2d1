var https = require('https');

function getAndPrintHTML (options) {

https.get(requestOptions, function(response) {

  response.setEncoding('utf8');
  response.on('data', function (data) {
  console.log('Data received. Length:', data)
  var newData = []
  newData += data;
  console.log(newData)
  });
  });
}
  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step3.html'
    };
getAndPrintHTML(requestOptions)
