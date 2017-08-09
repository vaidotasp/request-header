const express = require('express');
const app = express();

app.get('/', function(req, res) {
  let output = {"ipaddress":null, "language": null, "os": null}
  let ipStr = req.get('X-Forwarded-For');
  let lanStr = req.get('Accept-Language');
  let osStr = req.get('User-Agent');
  output.ipaddress = ipStr.slice(0, ipStr.indexOf(':') - 1);
  output.language = lanStr.slice(0, lanStr.indexOf(','));
  output.os = osStr.slice(osStr.indexOf('(')+1, osStr.indexOf(')'))
  res.send(output);  
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
