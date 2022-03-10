// string is a sequence of characters

var str = "hello pepcoders";
        //h  e l l o <space> p e p c o  d  e  r  s
        //0, 1,2,3,4    5,   6,7,8,9,10,11,12,13,14 
console.log(str);

console.log(str[4]);
console.log(str.length);


// string methods

// 1) Extration methods

// slice methods
// slice(start, end) -> start index is inclusive and end index is exclusive
                    //(start, end)
let slicedstr = str.slice(6, 16); // start index se shru hoga or ending index se ek pehle index tk string ktege
console.log(slicedstr);
console.log(str); // orginal source of information is not changed


// var slicedStr = str.slice(6); //start se leke pori end tak string kategi
// console.log(slicedStr);
//                         //(2,str.length+(end))-> (2,15+(-4)) -> (2,15-4) -> (2,11)
// var slicedStr = str.slice(2,-4); //start se leke peeche ke end times jane chod do 
// console.log(slicedStr);


//substring methods
 
// substr(start, length); start index se shuru hoga or aage ke kitne index capture krne hai
 
let ans = str.substr(2, 6);
console.log(ans);
console.log(str);

// replacing
str ="YOLO";
console.log(str);

// to lower and uppercase
console.log(str.toLowerCase());  //yolo
str ="fomo";
console.log(str.toLocaleUpperCase());  //FOMO
console.log(str); // information is intact and has not tampered with


// concatenation methods

let firststr ="You guys ";
let secondstr ="are smart";

let concatenatedstr = firststr + secondstr;
console.log(concatenatedstr);
 
// concat methods
let concatstr = firststr.concat(secondstr, " and me");
console.log(concatstr);


// trim methods -> remove all the whitespaces of starting and ending
 
let trimstr = "                           hello      how are you                        ";
console.log(trimstr);
console.log(trimstr.length);

console.log(trimstr.trim());
console.log(trimstr.trim().length);