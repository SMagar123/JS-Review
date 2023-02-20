const sayHello=(userName)=>{
    return ("Hello",userName);
}
console.log(sayHello("NCCS"));

const sumOfNumbers=(a,b)=>a+b;
console.log(sumOfNumbers(4,5));


const data={
    name:"suraj",
    // getName:()=>this.name,
    getName(){
        return this.name;
    },
    setName(param){
        this.name=param
        return this.name;
    }
}
console.log(data.getName())
console.log(data.setName("ManjuKali"))
//practice to get values from object
const temp={
    name:'a',
    age:'b',
    gender:'c',
    address:'d'
}
const arrayTemp=Object.values(temp);
console.log(arrayTemp)
