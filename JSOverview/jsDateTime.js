let currentDate=new Date();
console.log(currentDate.toString());//date to String

//date in milliseconds
console.log(Date.now());
const presentDate=Date.now();
console.log(new Date(presentDate));
console.log(new Date().toLocaleString("en-US"))//Date format for USA
console.log(typeof (new Date().toTimeString("en-US")))//Date format for USA
console.log(new Date().toDateString("en-US"))//Date format for USA
// console.log(new Date().toLocaleString("en-GB"))//Date format for USA
console.log(new Date().getMonth());
