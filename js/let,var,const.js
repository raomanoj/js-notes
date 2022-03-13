//console.log(x);
//var x = 10;
//let b= 100;
//console.log(b);

// bolck
// -> it is used for compound statements
// {

// }

// if (10 > 0){
    //1st statements
    //2nd statements
    //3rd statements
// }

// block scope -> variables decleared in a block are accesible inside the block , those variables are known to be block scoped
// variable decleared using let and const are blocked scope 
// var is function scoped
//var a = 100;
//{
  //  var a = 10;
 // let b = 20;
 //   const c = 30;
   // console.log(a);
   // console.log(b);
  //  console.log(c);
//}

//console.log(a);
//console.log(b);


let b = 10;
{   
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);

