// Javascripts objects are always inkey value pair

let obj = {};
console.log(obj); // empty objects

let person = {
    name: "manoj",
    age: 25,
    phone: 9999999999,
    gender:"male",
    height:"170cm"
};

// console.log(person);
console.log(`Hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "hello";
console.log(str.length); // dot notation
console.log(str["length"]); // square bracket notation


let captainAmerica = {
    firstname:"steve",
    lastname:"Rogers",
    friends:["Bucky", "Tony stark","Brue Banner"],
    age: 102,
    isAvenger: "true",
    address:{
        state:"Manhattan",
        city:"New York",
        country:"USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstname}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
captainAmerica.sayHi(); //method of accessing

// methods -> object ke andar function
//console.log(str.toUpperCase());