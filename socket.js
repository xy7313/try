var express = require('express'),
    app = express(),
    socketio = require('socket.io');

app.get('/',function(req,res){
     res.sendFile(__dirname+'/home.html');

});

var server = app.listen(3307,function(){
    console.log('running at 3307');
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
    console.log('connected');
    io.sockets.emit('data_to_client','coming from emit');
});