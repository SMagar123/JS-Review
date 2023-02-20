/*Module Export*/

//named export
export function calculateSum(a, b) {
  return a + b;
}
export function calculateSum(a, b) {
  return a + b;
}
function calculateDifference(a, b) {
    return a - b;
}
export function calculateDivision(a, b) {
  return a / b;
}
export function calculateMultiplication(a, b) {
  return a * b;
}

function exampleFunction(){
    console.log("example");
}
//named export variation
export {exampleFunction};
function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return calculateSum(a, b);
    case "sub":
      return calculateDifference(a, b);
    case "div":
      return calculateDivision(a, b);
    case "mul":
      return calculateMultiplication(a, b);
    default:
      return "invalid operation";
  }
}

//Default Export
export default calculate;