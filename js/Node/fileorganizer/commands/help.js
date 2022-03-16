function help() {
    console.log(`
        these are some myCLI commands used in various situations:
         
        1. node main.js tree <Path>
        2. node main.js organize <Path>
        3. node main.js help 
    `); 
}

//function abc(){
//    console.log("in help.js");
//}
module.exports = {
    // key value
    help:help,
    //haathi:help
    //ghoda:abc
}