/*Hoisting- use of function and variable even before they are declared*/
// hositingUnderstanding();
// const hositingUnderstanding=()=>{
//     console.log("test function");
// }

secondFunction();
function secondFunction(){
    console.log("second function");
}

console.log(x);//undefined
var x=50;