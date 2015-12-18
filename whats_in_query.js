var express = require('express');
var app     = express();

var requestFn = function( req, res ) {

  res.send( req.query );

}

app.get( '/search', requestFn );
app.listen( process.argv[2] );