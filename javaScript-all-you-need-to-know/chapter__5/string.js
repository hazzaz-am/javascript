// what is string?
// 'string' "string"

// string declaration
var str = "hello world" // 'hello world'
var str1 = String("hello") // 'hello'
var str2 = new String(str1) // [String: 'hello']
// console.log(typeof str2); // object

// convert into string
var num = 1000

console.log(num + "") // '1000'

console.log(num.toString()) // 1000

// format in local format
console.log(num.toLocaleString()) // 1,000

console.log(String(num));

// escape notation
var str = "Hello \"World\"";
console.log(str);
var str1 = "Escape This \"\\\" Character"; // Escape This "\" Character

var newLine = "I am Hazzaz\nI am learning Javascript";
var newLine1 = "I am Hazzaz\tI am learning Javascript";



