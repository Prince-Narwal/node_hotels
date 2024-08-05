const notes=require('./notes.js');
var _=require('lodash');//npm install lodash        //  _ underscore means lodash just an old convention
var fs=require('fs'); 
var os=require('os');//can extract details regarding the system

var user=os.userInfo();  
console.log(user);
console.log('User name is:',user.username);

fs.appendFile('greeting.txt','HI ' +user.username+'\n',()=>console.log('file is created'));
//fs ka appendfile function will create an text file and add this text into that text and it takes an callback function as its last(3rd) parameter which will its content on console

var age=notes.age;  
console.log(age);

var result=notes.addnumber(age+4,5);
console.log(result);

var data=["person","man","name",2,2,12,12,1,"name","age"];
var filter=_.uniq(data);
console.log(filter);

console.log(_.isString("Prince"));