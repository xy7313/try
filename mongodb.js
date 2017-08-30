var MongoClient = require('mongodb').MongoClient;
var connStr = 'mongodb://localhost:27017/salesforce';

MongoClient.connect(connStr, function(err,db){
    if(err){
        console.log('err');
    }else{
       var traineeDoc = {
            "id" : 14,
            "name" : "yy14",
            "place" : "nj14",
            "phone" : "12311"
       };
       db.collection('trainees').insert(traineeDoc,function(err, res){
           if(err){
               console.log('err');
               db.close();
           }else{
               console.log('save');

               db.collection('trainees').update({"id":"13"},{
                   $set: {
                       "name":'newname-!!!'
                   }
               });

               var traineeObj = db.collection('trainees').find();
               traineeObj.each(function(err,res){
                   console.log(res);
               })
                //it is not going to stop, and the last word of output is null
           }
       });
    }
});