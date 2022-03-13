// fs -> file system module -> it helps us to make files/folders appends data in them , delete data , read data 
const fs = require("fs");   // require("path of the file");
//const f1 = require("./f1.txt");
//const abc = require("../temp")

//console.log(abc);


// appendfilesync appends data into a file , if file is not present , it creates the file and appends the data
let res = fs.appendFileSync("f1.txt", "Hello i am f2 file");
fs.appendFileSync("f1.txt", "\n you guys are smart");
//console.log(res);

//let data = fs.readFileSync("f1.txt");
//console.log(data +"");

//let data = fs.readFileSync("f1.txt","utf-8");
//console.log(data +"");

