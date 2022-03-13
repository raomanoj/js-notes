// fs -> file system module -> it helps us to make files/folders appends data in them , delete data , read data 
const fs = require("fs");   // require("path of the file");
//const f1 = require("./f1.txt");
const abc = require("../temp")
// require method, goes to the file that  is needed to be required . execute that file. and if there is somthing that is returned/exported we get that variable in 'abc'
console.log(abc);
let ans = abc.add(45, 4);
console.log(ans);


// appendfilesync appends data into a file , if file is not present , it creates the file and appends the data
    // file path  //  data to be appended
let res = fs.appendFileSync("f1.txt", "Hello i am f2 file");
fs.appendFileSync("f1.txt", "\n you guys are smart");
//console.log(res);

let data = fs.readFileSync("f1.txt");
// data recieved is an object type , data is in a buffer format. for it to be readable , we convert it from buffer to string.
//console.log(data +"");  // automatic type conversion se buffer string mein convert ho gye hai

//let data = fs.readFileSync("f1.txt","utf-8");
//console.log(data +"");

