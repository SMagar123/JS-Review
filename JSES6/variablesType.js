//const--- must be initialized immediately after declaration,cannot be modified

const userName="Suraj";
// userName="Magar"----not possible
console.log(userName);
// Let

let amount=90;
function calc(param){
    return amount=param+amount;
}
console.log(calc(200));

const data={};
data.name="car";// possible as a whole object is being used
// data={b:1}//not possible
console.log(data);


// we can assign new property but reassigning is not possible

const tempArray=[];
tempArray.push(100,100);
// tempArray=[1,2,3]; --- not possible
console.log(tempArray);
/* resuses memory references*/
let a;
[12,3,23].forEach(each=>{
    a=each;
    console.log(a);
})

