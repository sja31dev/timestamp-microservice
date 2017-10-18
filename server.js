

/*var fs = require('fs');*/
var express = require('express');
var app = express();

/*app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });*/

app.get('/:string', function(req, res) {
  var date;
  // Get the string parameter from the request
  var str = req.params.string;
  // Attempt to convert to integer
  var sec = parseInt(str + "");
  if (str === String(sec)) {
    date = new Date(sec * 1000);
  } else {
    date = new Date(str);
  }
  var tUnix = Math.floor(date.valueOf() / 1000);
  var tNatural = date.toLocaleDateString("local", { year: 'numeric', month: 'long', day: 'numeric' });
  // Null tNatural if tUnix hasn't been converted properly
  tNatural = !tUnix ? null : tNatural;
  var data = {
    unix : tUnix,
    natural : tNatural
  };
  try {
    res.json(data);
  } catch (e) {
    res.sendStatus(500);
  }
});

  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

