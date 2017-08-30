var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    engine = require('consolidate'),
    session = require('express-session');

//for dynamic webpage, like we retrieve data from database.
//1. install temporary engine using `npm install consolidate, npm install nunjucks`
app.engine('html',engine.nunjucks);
app.set('view engine','html');
app.set('views',__dirname+'/views');

//to parser more complicated data structure(json) in body, using extended: true
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());

//set session as a pro...
app.use(session({
    secret:'marlabs_sess_secret_key',
    resave: true,
    //false: only save once 
    saveUninitialized:true
}));

app.get('/',function(req,res){
    // res.send('hello');
    //after added the temp engine, we can using render to show a page view
    var username = req.query.username;
    //have create a var: username, we can use interpolation in home.html
    res.render('home',{'username':username});
});

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/home.html');
});

//http://localhost:3307/getData/100/xy/org?location=nj&addr=us
app.get('/getData/:id/:username',function(req,res){
    console.log(req.params.id);
    console.log(req.params.username);
});

//2. want to parser request body we need to install body-parser using `npm install body-parser`
app.post('/postData',function(req,res){
     console.log(req.body.firstname);
     console.log(req.body.lastname);
     req.session.firstname = req.body.firstname;
     req.session.lastname = req.body.lastname;
     res.redirect('http://localhost:3307/profile');
});

app.get('/profile',function(req,res){
    res.render('profile',{'fname':req.session.firstname,'lname':req.session.lastname});
});

//invalid url, to here
app.use(function(res,res){
    res.send('invalid, try later');
});

app.listen(3307,function(){
    console.log("localhost:3307");
})