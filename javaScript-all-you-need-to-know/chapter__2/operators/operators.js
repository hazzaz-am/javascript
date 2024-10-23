// Arithmetic operation
// + - * / % ++ --

// var a = 10;
// var b = 3;

// // console.log(a % b); // 1

// // Incremental Operator
// // Pre Incremental - Post Incremental

console.log(++a); // 11
console.log(a++) // 11
console.log(a); // 12

// Assignment operator
// == += -= *= /= %=

var a = 20;
var b = 10;

a += b;
console.log(a);

a-=b;
console.log(a);

a *= b;
console.log(a);

a /= b;
console.log(a);

a %= b;
console.log(a);

// Comparison Operator
var a = 10;
var b = 20;

console.log(a == b); // false
console.log(a != b); // true
console.log(a <= b); // true

console.log(a >= b); // false

a = 20;
console.log(a <= b); // true

a = '50';
b = 50;
console.log(a == b); // true
console.log(a === b); // false
console.log(a !== b); // true

// Logical Operator
// &&
// ||
// !
var b = 20;
console.log(typeof b);




5 > 4; // true
"apple" > "pineapple";  // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false