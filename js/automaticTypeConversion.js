var ans = "5" + 1; 
// "5" + "1" -> 51
var ans = 1 + "5"; 
// "1" + "5" -> 15
console.log(ans);

console.log(null * 5); // null is converted into 0 hence output is 0
console.log(null * "5"); // 0 anything multipled by zero is obisouly 0
console.log(undefined * 5); // Nan
console.log("5" - 1);
   // "5" - 1 -> 4

   console.log("ten" * 3); // "ten" string cannot be mapped to a number like "5" can be mapped number 5 hence output is Nan
   console.log("10" * 3);