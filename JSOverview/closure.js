function outerfn(){
    const outerValue='outer value';
    function innerFunction(){
        console.log(outerValue);
    }
    function validate(){// function binded with lexical scope is closure
        return innerFunction;
    }
    if(typeof outerValue!=="function"){
        return validate();
    }
    return null;
}
const outerRef=outerfn();
outerRef();