const numberArray=[1,2,32,23,43,4,6,"A",34,3,2,98];
//
console.log(numberArray.length);
//map 
console.log(numberArray.map((eachElement)=>{
    return eachElement=eachElement*3;
}));
//map with condition
console.log(numberArray.map((eachElement)=>{
    if(eachElement>76){
    return eachElement=eachElement*3;}
    else{
        return eachElement;
    }
}));

//includes
console.log(numberArray.includes("A"));

//array checks object by it's memory refrences
const obj1={
    a:1
}
const obj2={
    b:5
}
const customedArray=[obj1];
console.log(customedArray.includes({a:1}));//false because it refrences to another memory allocation
console.log(customedArray.includes(obj1));//true because refrence of object is stored

//SORTING
const practiceArray=['q','g','a','p','c'];
const practiceNumberArray=[12,3,2,43,5,34];
console.log(practiceArray.sort());
console.log(practiceArray.sort((a,b)=>{
    return b.localeCompare(a);//descending order of aplhabet
}));
console.log(practiceArray.sort((a,b)=>{
    console.log({a,b})||b.localeCompare(a);
}))
//JS sorts the numbered array according to first place number so 12 comes before 3 as 1 comes before 3
console.log(practiceNumberArray.sort());

console.log(practiceNumberArray.sort((a,b)=>{
    //return a-b;//ascending order
    return b-a;//descending order
}))

//Slice-- original array is unaffected 
console.log(numberArray.slice(1,5));// returns the array including index 1 and excluding index 5
console.log(numberArray.slice(-1));
console.log(numberArray[-1]);//no possible to access the last element directly

//FILTER
console.log(numberArray);
console.log(numberArray.filter(e=>{
    return e%2===0;
}))

//FIND
 console.log('array find',numberArray.find(e=>e===6));

//REDUCE
const array7=[1,2,3,4,5,3,23];
console.log(array7.reduce((a,b)=>console.log({a,b})||a+b));
console.log(array7.reduce((acc,curr)=>console.log({acc,curr})||acc+curr, 100))
console.log(array7.reduce((acc,curr)=>curr%2==0?acc+curr:curr, 0))