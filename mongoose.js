//install using `npm install mongooes`, then create this file

var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

mongoose.connect('mongodb://localhost/salesforce',{'useMongoClient':true});

var db = mongoose.connection;

db.on('error',function(){
    console.log('err');
});

db.on('open',function(){
    console.log('connected');
    //schema
    var user_schema = mongoose.Schema({
        id:Number,
        name:String,
        place:String,
        phone:String
    });

    //a new collection
    var user_model = mongoose.model('user_details',user_schema);

    user_model.find({},function(err,res){
        if(err){
            console.log('err');
        }else{
            res.forEach(function(record){
                console.log(record);
            });
        }
    });
    
    // var user_document = user_model({
    //     id : 15,
    //     name : "yy15",
    //     place : "nj15",
    //     phone : "12311"
    // });

    // user_document.save(function(err){
    //     if(err){
    //         console.log('err');
    //     }else{
    //         console.log('saved');
    //         db.close();
    //     }
    // });

});

//why using mongoose:in mongodb everything is collection, want a schema, a model, through this model, we save data

//create a schema, then create a module using this schema, then operation db