## Run:
1. node server.js


## Notes

1. create index.js, code and run `node index.js` in this directory
```
console.log("task1");
setTimeout(function(){
    console.log("task2");
},5000);

console.log("task3");
```

2. using module

```
//mod.js
var user_arr = ["u1","u2","u3"];

function disp(){
    return "org";
}

var user_obj = {
    un:"un",
    org:"org"
}

module.exports = {user_arr,disp,user_obj};
```

```
//index.js
var mod = require('./mod');
console.log(mod);
//then run node index.js in terminal
```

3. create a folder for multiple modules, use name node_modules, so that we do not need to specify the path in index.js, cause node will find module automatically from node_modules folder

4. event queue, task queue, work thread, set timeout

5. Using callback or promise or event emitter
```
//index.js
mod.abc(function(data){
    console.log(data);
});

//mod.js
function abc(callback){
    //if no setTimeout, "task 2" only after 10000000
    setTimeout(function(){
        for(var i = 0; i<10000000000; i++){

        } 
        // console.log(i);
        callback(i);
    }, 0);
}
//output:1000000000
```

```
//index.js
mod.getData().then(function(data){
    console.log("data:"+data);
},
function(err){
    console.log("err:"+err);
});

//mod.js
//using promise
function getData(){
    var promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve( "hi");
        }, 3330);
    });
    return promise;
}

module.exports = {user_arr,disp,user_obj,abc,getData};
```
