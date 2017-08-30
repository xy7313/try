//day1
// var EventEmitter = require('events').EventEmitter;
// function getData(){
//     var e = new EventEmitter();
//         setTimeout(function(){
//             //e.emit(event name,data)
//             e.emit("process_start","data process started!")

//             var cntr=0;
//             var interval_var = setInterval(function(){
//                 e.emit("data_process","data process:"+cntr)
//                 if(cntr==5){
//                     e.emit("process_complete","complete");
//                     clearInterval(interval_var);
//                 }
//                 cntr++;
//             },1000);
//         }, 3330);
//     return e;
// }

// var eventVar = getData();

// eventVar.on('process_start',function(data){
//     console.log(data);
// });

// eventVar.on('data_process',function(data){
//     console.log(data);
// });

// eventVar.on('process_complete',function(data){
//     console.log(data);
// });


//day2

//1. files
// var os = require('os'),
//     fs = require('fs');

// // readFile
// console.log(os.homedir());
// fs.readFile('file.txt','utf-8',function(err,data){
//     if(!err){
//         console.log(data);
//     }
// });

// // writeFile
// fs.writeFile('newFile.txt','data for newfile',"utf-8",function(err){
//     if(!err){
//         console.log("file writing");
//     }
// });

// // updateFile
// fs.open('newFile.txt','a+',function(err,filepointer){
//     if(!err){
//        fs.write(filepointer,'update file','utf-8',function(err){
//             if(!err){
//                 console.log('file writing');
//             }
//        });
//     }
// });


// //read partial file
// var read_stream = fs.createReadStream("google.txt");
// read_stream.setEncoding('UTF8');

// read_stream.on('data', function(partial_data){
//     console.log('partial:',partial_data);
// });
// read_stream.on('end',function(){
//     console.log("done");
// });

// //piping
// var write_stream = fs.createWriteStream('temp.txt');

// read_stream.pipe(write_stream);

//2. create modules
var http = require('http'),
    fs = require('fs');
// // retrieve data from url using get
// var complete_data = '';
// http.request('http://www.google.com/',function(resp){
//     resp.on('data',function(data){
//         //print data directly, we get buffer
//         console.log("data"+data);
//         complete_data+=data;
//     })
//     resp.on('end',function(){
//         console.log('done');
//         console.log(complete_data);
//     })
    
// }).end();

// var http_server = http.createServer(function(req,resp){
//     console.log("url:", req.url);
//     resp.end('hello Ma');
// });

// http_server.listen(8081);

// console.log("server run @ localhost:8081");


var http_server = http.createServer(function(req,resp){
    console.log("url:", req.url);
    if(req.url=='/'){
        resp.end('hello Ma');
    }else if(req.url=='/home'){
        fs.readFile('home.html','utf-8',function(err,data){
            resp.writeHead(200,{'Content-Type':'text/html'})
            // resp.end('hello homepage');
            resp.end(data);
        })
    }else{
        resp.end('no page');
    } 
});

http_server.listen(8081);

console.log("server run @ localhost:8081");

