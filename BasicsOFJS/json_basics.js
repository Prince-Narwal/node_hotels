// const { json } = require("express/lib/response");

const jsonString='{"name":"John","age":23,"city":"New York"}';//json-->Javascript object notation ,kind of way to transfer/share data in the form of key-value pair
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(typeof jsonString);


const objectToConvert={
    name:"Alice",
    age:25
};

const json=JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json);