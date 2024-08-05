
// function add(a,b){
//     return a+b;
// }


//there are multiple ways of defining a function in js
// var add=function(a,b){
//     return a+b;
// }
 
// var result=add(31,120);
// console.log(result);  

//nodemon--> library of JS/npm which keeps the server running automatically    npm install -g nodemon   then   nodemon server.js

// (function(){
//     console.log("prince is added");
// })();

function callback(){
    console.log("now callback function is called");
}
//JavaScript is single-threaded, meaning it executes code sequentially, one line at a time. However, many tasks, such as network requests, file operations, or timers, are time-consuming and need to be executed asynchronously to prevent blocking the main thread. Callbacks allow you to handle these operations without blocking the execution of the rest of the code.

function add(a,b,callback){
    var result=a+b;
    console.log('result:', result);
    callback();//calling the another function within a function to ensure a particular order of execution   
}

//Inline function-->just another style of writing an function js
add(2,3,()=>console.log('add completed'));//passing three parameters through add function i.e. num,num,function(another function returning some "add completed" text)

add(32,23,callback);




