const userInformation="Hello! welcome to the class of React Practice 2079.";
//length
const firstName='';
function handleSubmit(){
    if((firstName.length)>0){
        console.log("Submit form data");
    }
    else{
        console.log("empty first name")
    }
}
handleSubmit();

//split
const userDetails="Hello, I am, Suraj Pulami Magar.";
console.log(userDetails.split(''));//returns array of each character of string
console.log(userDetails.split(' '));//returns array of each words/characters separated by space
console.log(userDetails.split(', '));//returns array separated by comma

//UPPERCASE
userDetails.split(',').forEach(e=>{
    console.log(e.toUpperCase());
})

//LOWERCASE
userDetails.split(',').forEach(e=>{
    console.log(e.toLowerCase());
})

//practical example
const userName="USERNAME";
function fetchUserDetail(param){
    console.log(param,'fetched user details...');
}
if(userName.toLocaleLowerCase()==='username'){
    fetchUserDetail(userName.toLocaleLowerCase());
}

//includes

const carName="Merceeds Benz";
console.log("string includes:::",carName.includes("Ben"));

//Trim---removes the unrequired whitespaces

const houseName=" Modern House ";
console.log(houseName.length);
console.log(houseName.trim().length);

// Replace--- replaces the string within the string

console.log(houseName.replace("Modern","Traditional"));
console.log(houseName.replace(/o/g,"T"));
console.log([houseName.replace("Modern","Traditional"),houseName.replace(/o/g,"T")]);

//String concat
let user=['s','s','df']
const userNaam="Suraj Pulami Magar"
const userAddress="Goldhunga"
console.log(userAddress.concat(...user));
