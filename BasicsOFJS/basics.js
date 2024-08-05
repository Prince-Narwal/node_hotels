// var a = 5;//can use let instead of var
// var b = 6;
// var ans = a + b;
// console.log("hello! I am learning nodejs")
// console.log("answer:", ans);

// const name = 'Prince';
// // name='Rohan';//gives error because can not change the const variable value
// console.log(name);
// console.log(typeof name);

// const cars=["Alto","WagonR","Swift",32];//array in JS
// cars.push("tesla");//pushing element in the array
// console.log(cars);//printing elements of the array
// console.log(cars[1]);//printing the element at the 1st index of the array

// //if-else in JS
// var age=21;

// if(age<18){
//     console.log("Not allowed");
// }
// else
//     console.log("you are Allowed");


// //for loop
// var count=10;
// for(var i=1;i<=count;i++){
//     console.log(i);
// }


var prompt=require('prompt-sync')();
let a=5;
var b=9;
var ans=a+b;
console.log("answer",ans);

const name="Prince";
// name="rohit";
console.log(name);
console.log(typeof name);

// var age=12;
const age=prompt("enter your age");

if(age>12){
    console.log("Age is above 12");
}
else
console.log("Age is below 12");

var count=prompt("Enter the value of count");
for(var i=1;i<=count;i++){
    console.log(i);
}

var cars=["alto","omni",12,"maruti"];
console.log(cars);
cars.push("Baleno");
console.log(cars);



