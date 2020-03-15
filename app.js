var express = require('express');

var app = express();

app.get( '/' , function( request , response ) {
    response.send('this is the homepage');
});

app.get( '/contact' , function( request , response ) {
    response.send('this is contact page');
});

app.get( '/profile/:id' , function( request , response) {
    response.send('Your requested to see a profile id with : '+ request.params.id);
});

app.listen(3000);