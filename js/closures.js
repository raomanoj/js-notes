/*function outter () {
    var a = 10;
    function inner () {
        console.log(a);
    }
    inner ();
}
outter ();


function outter () {
    var a = 10;
    function inner () {
        console.log(a);
    }
    return inner;
}
var z = outter ();
console.log(z + "");
z();

*/


function outter () {
    var a = 7;
    function inner (){
        console.log(a);
    }
    a = 10;
    return inner;
}

var c = outter();
console.log(c);
c();