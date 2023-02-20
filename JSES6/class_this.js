/*Class*/
const calc=(a,b)=>a+b;
class Test{
    constructor(a,b){
        this.param1=a;
        this.param2=b;
        console.log(a,b);
    }
    reassign(a,b){
        this.param1=a;
        this.param2=b;
        console.log(a,b);
    }
    getParam1=()=>this.param1
    getParam2=()=>this.param2
   
    /*static member function and property*/
    static option=50;
    static staticFn(a,b){
        return this.option+calc(a,b);
    }
    static reassignStatic(param){
        this.option=param;

    }
}
//Instance of class Test
const classTest=new Test("hello world",4);
console.log(classTest.getParam1());
classTest.reassign("goat",10);//overwriting the the intial value through this keyword 
console.log(classTest.getParam1());

//accessing the static function of class
console.log(Test.reassignStatic(10))
console.log(Test.staticFn(5,6));