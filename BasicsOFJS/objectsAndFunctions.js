//objects-->In JavaScript, objects are used to store collections of data and more complex entities. An object is a collection of properties, and each property is an association between a key (or name) and a value. The value of a property can be a function, which is then considered a method of the object.
//In JavaScript, objects are dynamic collections of properties, where each property is a key-value pair. They can be created using literals, constructors, or class syntax (introduced in ES6).
const person={
    name:"John the Don",
    age:30,
    isStudent:false,
    hobbies:["reading","swimming","painting"]
};

console.log(person.hobbies);


const ages=[13,43,20,21];
const result=ages.filter(checkage);

//function in JS
function checkage(ages){
    return ages>=18
}

console.log(result);