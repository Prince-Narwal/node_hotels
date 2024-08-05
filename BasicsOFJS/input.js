var prompt=require('prompt-sync')();//npm i prompt-sync
const age=prompt("Please Enter your age:");
if(age<18){
    console.log("You get a 20% discount");
}
else
    console.log("You got a 40% senior discount");