// lexicographic system - string comparison
var a = "abc";
var b = "bcs";

// console.log(a > b); // false
// console.log(b > a); // true

var c = "ABC";
var d = 'DEF';
// console.log(c > d); // false
// console.log(c < d); // true

var e = 'AAA';
var f = 'aaa';
// console.log(e < f); // true
// console.log(e > f); // false

var g = 'ZZZ';
var h = 'zzz';
// console.log(g < h); // true
// console.log(g > h); // false

var a = 'aadjf';
var b = 'zasdf';
// console.log(a < b); // true
// console.log(a > b); // false

var a = 'aaaaz';
var b = 'aaaaf';
// console.log(a < b); // false
// console.log(a > b); // true

// convert string into number while comparison
var a = '0001';
var b = 1;
// console.log(a == b); // true
// console.log(a === b); // false

var a = 'aaa5zzz';
var b = 'aaa10zzz';
// console.log(a < b); // false
// console.log(a > b); // true

var a = '1aaa';
var b = '2aaa';
// console.log(a < b); // true
// console.log(a > b);	// false


var a = '1';
var b = '2';
console.log(a < b); // true
console.log(a > b);	// false