//template literals

const stringOne="Hello Good Morning";
const stringTwo="Ullu";
// console.log(stringOne+" "+stringTwo);
const result=`Welcome to Nagarkot.${stringOne} ${stringTwo}`;
console.log(result);
const sum=`${5+6} is the sum`;
console.log(sum);
const meroObject={name:"Manju"};
console.log(`${meroObject.name} is funny`);

function getName(param){
    return param;
}
console.log(`${getName("Test")}`)