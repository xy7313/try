var express = require('express'),
    app = express();

app.use(express.static('assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/home.html');
});

app.use(function(req,res){
    res.send('Invalid access!');
});

app.listen(3307,function(){
    console.log('Connection established!!!');
})