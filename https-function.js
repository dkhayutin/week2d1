var https = require('https');
var newData = '';

module.exports = function getHTML (options, callback) {

  https.get(options, function(response) {

    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log('Data received. Length:')
      newData += data;
      callback(data)

      //var newData = ' '
      //console.log(newData)
    });
  });

}
