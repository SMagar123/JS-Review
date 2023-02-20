//IIFE (Immediately invoked function expression)---prevents memroy leak
//--hides inner functionality
const someFn = (function (param1) {
  return param1;
})(123);
console.log(someFn);

// IIFE with arrow functions
const someAnotherFn = ((param) => {
  return param;
})("some apram");
console.log(someAnotherFn);

//IIFE as an annonymous function
(()=>{
    const {result} = require('./utilityFn');
    console.log(result);
})()

