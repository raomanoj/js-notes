function outer () {
    inner();
    function inner() {
        console.log(b);
    }
}
var b = 10;
outer();
console.log(b);

// scope:
//where can this variables/function be accesed in the code 
     //OR
//is variable/function inside the scope of code/function

// lexical environment = local memory + lexical env of parent

//scope chain = chain of lexical environment and the parent refferences.
