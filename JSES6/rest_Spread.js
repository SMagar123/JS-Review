//REST
const data = { name: "a", address: "b", phone: "c", email: "d" };
console.log(data);
const temporaryData = { ...data };
console.log(data);
const { name, ...remainingData } = data; //destructing object excluding name property
console.log(remainingData);


function testFunction(...param) {
  console.log(param);
}
console.log(testFunction(12, 34, "df", "df", true));

const dataArray = ["bmw", "suzuki", "hyndai", "tesla"];
const [suraj, ...remainingArrayValue] = dataArray; //destructring array
console.log(remainingArrayValue);

//Spread
const nayaData = {
  newKey: "new vALUE",
  ...data,
};
console.log(nayaData);

const nayaArray = ["orange", ...dataArray];
console.log(nayaArray);

//modifying the value of object of targeted Index in array of Object
const objectArray = [
  { name: "user1", age: "20" },
  { name: "user2", age: "30" },
  { name: "user3", age: "30" },
  { name: "user4", age: "40" },
  { name: "user5", age: "45" },
];
console.log("objectArray", objectArray);
const targetIndex = 2;
const prevData = objectArray[targetIndex];
console.log(prevData);
const practiceArray = [
  ...objectArray.slice(0, targetIndex),//elements from index 0 to targetIndex is copied
  { ...prevData, age: 35 },//change is made in targeted object/index
  ...objectArray.slice(targetIndex + 1),//rest elements are copied unharmed
];
console.log(practiceArray);

console.log(data);
console.log({...data,name:"Suraj"});//modifying the value of object
