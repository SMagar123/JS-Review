//destructuring of Objects
const data = {
  a: 1,
  b: 2,
  c: 3,
  d: 56,
};
const d = "someValue";
// const {a,d:suraj}=data;// we can assign the value of object while destructuring by key:value in case of key predefined
// console.log(a,suraj);

const { a, b, e = "suraj" } = data;
console.log(e);

//the default parameter of the function gets override
function test(param = 56) {
  //   if (param === null || param === 0 || param === "") console.log(param);
  if (!param) console.log("value is invalid");
  else console.log(param);
}
test("suraj");
test(null);
//Destructuring function parameter and implementing rest operator
function test2({ name, value, ...restValue }) {
  console.log({ name, value, restValue });
}
const newData = { name: "Hello", value: "world", study: "bachelor" };
test2(newData);

//Array Destructuring
const meroArray = [1, 23, "hello", true, new Date()];
const teroArray = [234, "world", 978, false];
const [nepal, cable, ...rest] = meroArray;
console.log(nepal, cable, rest);

function test3([value1, value2, ...rest]) {
  console.log(value1, value2, rest);
}
test3(meroArray);

const newArrayData = [45, 65, ...meroArray];
console.log(newArrayData);

//merging two array
const hamroArray = [...meroArray, ...teroArray];
console.log(hamroArray);
