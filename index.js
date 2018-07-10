var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.get('/queueCreated', function(req, res){
 	// io.emit('chat message', 'msg-test');
 	// io.on('connection', function(socket){
 	io.emit('chat message', '');
 	// // });
 	console.log('queueCreated!');
 	res.send('');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
    console.log('Record change!');

  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
