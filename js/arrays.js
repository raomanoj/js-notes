// Array  -> is acollection of elements

let cars = ["BMW", "Audi", "MG", 1, 2 ,3, true];
// in js you can store different values of different types in an array  
console.log(cars);

// accising the elements of array
console.log(cars[0]);
console.log(cars[3]);

// replacing elements in array
cars[3] = "Mahindra";
console.log(cars[3]);

// adding elements in array
cars[7] = "Honda";
console.log(cars);

// methods of an array 

// 1) pop methods -> this methods removes the element from the last of array

cars.pop();
console.log("after poping the element\n"+cars);

// 2) push methods -> it pushes a new element at then end of array
cars.push("TATA");
console.log("after pushing the element");
console.log(cars);

// 3) unshift method -> this adds element at starting of array 
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// 4) shift method -> it removes element from 0th index of array
cars.shift();
cars.shift();
console.log(cars);

// to find length of array
console.log(cars.length);


// 2D array

let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);





