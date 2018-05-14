var https = require('https');


function getAndPrintHTMLChucks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log('Chunk Received. Length:' + '/n' + data.length)
    })
  })
}

getAndPrintHTMLChucks()
