var express = require('express');
var app = require('express')();
var ejs = require('ejs');// 后台模板库
var bodyParser = require("body-parser"); 
var http = require('http').Server(app);
// var io = require('socket.io')(http);
var compression = require('compression');//开启gzip
app.use(compression());//开启gzip
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './public');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/public/www/index.html');
  res.render("index",{title:'header'});
});

app.get('/aa', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  // res.sendFile(__dirname + '/public/www/index.html');
  res.end(JSON.stringify({aa:'aa'}));

  // var _data = { email: 'example@163.com', name: 'jaxu' };
  // res.type('application/json');


  // res.jsonp(_data);

  // res.end(_data);
});

app.post('/bb', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  // res.sendFile(__dirname + '/public/www/index.html');
  // res.end(JSON.stringify({aa:'aa'}));

  // var _data = { email: 'example@163.com', name: 'jaxu' };
  // res.type('application/json');


  // res.jsonp(_data);

  // res.end(_data);
  console.log(req.body.name)
  res.end(JSON.stringify({cc:'cc'}))
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});