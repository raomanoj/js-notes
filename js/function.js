// 3 types of function

//  1) normal function

/*function getReady(){
    console.log(brush);
    console.log(bathing);
    console.log(breakfast);
    console.log(coding);
}*/

// function defination
//function function_name(param1 , param2){
    //do somthing
//} 

// function invoke
// function_name(arg1 , arg2);
 
function add(a, b){
console.log( a + b);
}  
//function add(a, b){
  //  return a + b;
//}

//add (2, 6);

//function are treated as first class citizen in javascript
// -> functions can be returned
// -> functions can be passed as parameters/ argument


function calculator(str, a , b) {
    if (str == 'add') {
        return function add(){ 
        console.log( a + b);
        }
    }
    //else if (str == 'sub') {

     //}
}
let returnedFunc = calculator('add', 2, 3);
console.log("returend function is \n" + returnedFunc);
returnedFunc();

// 2) Function expression
 
//let variable_name (){
  //  do something
//}
//name of variable is used to invoke the function
//variable name();


let sayhi = function () {
    console.log("hello guys i am a function expression")
}
sayhi();

// 3) IIFE -> Imediately invoke function expression

function add(a, b){
    return a + b;
}
add(2, 3);

let additionIIFE = (function add (a, b) {
    console.log(a + b);
})(20, 30);
 //console.log(additionIIFE);
// console.log(additionIIFE(20, 30));










