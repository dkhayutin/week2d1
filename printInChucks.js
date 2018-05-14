var https = require('https');


function getAndPrintHTMLChucks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunck) {
      console.log('Chunk Received: ',  chunck  + '/n')
    })
  })
}

getAndPrintHTMLChucks()
