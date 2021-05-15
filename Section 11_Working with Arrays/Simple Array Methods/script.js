'use strict';

// Simple Array Methods
let arr=['a','b','c','d','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));

console.log(arr.slice(-2)); //to get Last element array
console.log(arr.slice(1,-2));

console.log(arr.slice());
console.log([...arr]);

// Splice
console.log(arr.splice(2));
console.log(arr);

arr.splice(-1);
console.log(arr);

arr.splice(1,2); //index 1,2 will be romoved
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //using spread method

// JOIN
console.log(letters.join(' - '));