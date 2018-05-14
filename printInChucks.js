var https = require('https');


function getAndPrintHTMLChucks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chuck) {
      console.log('Chunk Received: ',  chuck  + '/n')
    })
  })
}

getAndPrintHTMLChucks()
