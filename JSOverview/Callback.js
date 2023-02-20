function fn1(param){
    return param;
}
function fn2(param){
    if(typeof param==="function"){
        console.log(param("callback function"))
    }
}
fn2(fn1);//passing function as parameter to another function

