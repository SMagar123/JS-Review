//Set
const arr=[12,232,232];
const obj={name:"suraj"}
const collection=new Set();//stores only unique value no duplicate
collection.add(12);
collection.add(12);//ignored
collection.add(34);
collection.add(arr)
collection.add(arr)//ignored as the refrence is already presented in memory
collection.add([776,87])
collection.add(obj);
console.log([...collection.values()]);
collection.clear();
console.log([...collection.values()]);

collection.forEach(each=>{
    console.log(each);
})
//destructuring of array is supported by collection too