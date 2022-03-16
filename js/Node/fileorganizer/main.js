// entry point of my command line

let helpfunc = require("./commands/help");
//console.log(helpfunc.haathi());
let inputArr=process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree":
        // call tree function
        console.log("tree function called and executed sucessfully on path "+path);
        break;
         case "organize":
             // call organize function
             console.log("organize function called and executed sucessfully on path "+path);
             break;
         case "help":
                 // call help function
                 helpfunc.help();
             //    console.log("help function called and executed sucessfully");
                 break;
          default:
              console.log("command not recoganized:/")
              break;

}