var str = "hazzaz";
// unicode character
console.log(str.charCodeAt(0)); // 97

// character
console.log(str.charAt(0));

var res = str.charAt(-2);
console.log(res);
console.log(typeof res); // string

var a = "javascript";
console.log(a.charAt(1));

var res = a.charAt(1);
console.log(typeof res);
console.log(a.charAt(a.length - 1)); // t

console.log(a.at(0));
console.log(a.at(-1));

// access character
var a = "abc";
console.log(a[0]); // a
console.log(a[-1]); // undefined
console.log(a[a.length - 1]); // c

a[0] = "d"; // does't work - read only
console.log(a); // abc

// string concat

var b = "def";
console.log(a.concat(" ", b)); // abc def
console.log(a.concat(b)); // abcdef

var c = "ghijklmnopqurstuvwxyz";
console.log(a.concat(" ", b, " ", c));

console.log(c.constructor); //  [Function: String]

var nam = "hazzaz abdul mannan";
// console.log(nam.endsWith("mannan")); // true
// console.log(nam.endsWith("n")); // true
// console.log(nam.endsWith("m")); // false
// console.log(nam.endsWith("man")); // false

var nam = "hazzaz abdul mannan ";
// console.log(nam.endsWith(" ")); // true

console.log(nam.endsWith('abdul', 13)); // search string in specific length 

