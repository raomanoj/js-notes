//print
console.log("hello js:");
// declare variable
//undefined;
// js only tells you it is a variable
let a;
console.log(a);
a = 10;
a = 10.1;
a = "Hello I am a string";
a = "hello i am also a string";
// variables types -> primitive type:- number , string , bollean , null;
a = null;
console.log("variable contain" ,a);
a = true;
console.log("variable contain" ,a);

// js -> java , c++ , c
let num =10;
for (let i = 1; i <= num ; i++){
    console.log("num is ", i);
}

//is prime
let number = 23;
let flag = true;
for (let div = 2; div < number; div++){
    if (number % div ==0){
        flag = false;
        break;
    }
}

if (flag == true){
    console.log(number, " is prime");
}else{
    console.log(number, " is not prime");
    }



