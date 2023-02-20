const data={
    firstName:'Suraj',
    lastName:'Magar'
}
data.firstName="Sagar";//directly modifying the value of object
//accessing the object 
console.log(data.firstName);//direct
console.log(data['firstName']);//dynamic property access
const dyanmicVairable='firstName';
data['firstName']='Lenovo';//dyamic property assignment
const assignmentVariable='lastName';
data[assignmentVariable]='Pulami'
console.log(data[dyanmicVairable]);//object access through variable

//OBJECT METHODS
//Object keys()
const book={
    bookName:"OOAD",
    author:'Mark Austin',
    publishedDate:'2020-01-20',
    publication:'Ekta Publication'
}
console.log(Object.keys(book));//displays keys of object and can be accessed through Object(Global)

//Object values()
console.log(Object.values(book));//displays values of objects in array
//Object entries()
const entriesArray=Object.entries(book);
console.log(Object.entries(book));//displays keys and values in array of array format

//Object fromEntries
console.log(Object.fromEntries(entriesArray));//arrays to object conversion
//converting key,value pair array to object
const keyValArr=[
    ['firstName','suraj'],
    ['lastName','magar'],
    ['address','goldhunga']
];
const result={};
let key;
let value;
keyValArr.forEach(item=>{
    console.log(item)
    key=item[0];
    value=item[1];
    result[key]=value;
})
console.log(result)

const nextResult=keyValArr.reduce((acc,curr)=>{
        key=curr[0];
        value=curr[1];
        acc[key]=value;
        return acc;
},{})
console.log("new object",nextResult);

const arrayOfObject=[
    {
        firstName:"Suraj",
        lastName:"Magar"
    },
    {
        address:"Goldhunga",
        phonenumber:"17263"
    },
    {
        firstName:"Suraj",
        lastName:"Magar"
    },
    {
        firstName:"Suraj",
        lastName:"Magar"
    }
]
