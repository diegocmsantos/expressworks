var express = require('express');
var fs      = require('fs');
var app     = express();

var requestFn = function( req, res ) {

  var books = null;
  fs.readFile( process.argv[3], 'utf8', function( err, data ) {

    if (err) return res.sendStatus(500);

    try {
      books = JSON.parse( data );
    } catch (e) {
      res.sendStatus(500)
    }

    res.json( books );
    
  } );

}

app.get( '/books', requestFn );
app.listen( process.argv[2] );