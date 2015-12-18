var express = require('express');
var app     = express();

var paramMiddlewareFn = function(req, res, next, id) {
  req.id = id;
  next();
}

var requestFn = function( req, res, next ) {

  res.send( require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.id)
    .digest('hex') );

  next();

}

app.param( 'id', paramMiddlewareFn );

app.put( '/message/:id', requestFn );

app.listen( process.argv[2] );