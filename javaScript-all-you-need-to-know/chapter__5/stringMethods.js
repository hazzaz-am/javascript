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
console.log(nam.endsWith("mannan")); // true
console.log(nam.endsWith("n")); // true
console.log(nam.endsWith("m")); // false
console.log(nam.endsWith("man")); // false

var nam = "hazzaz abdul mannan ";
// console.log(nam.endsWith(" ")); // true

console.log(nam.endsWith("abdul", 13)); // search string in specific length

console.log(nam.startsWith("h"));
console.log(nam.startsWith("hazzaz"));
console.log(nam.startsWith("hazzaz", 8)); // false
console.log(nam.startsWith("hazzaz", 0)); // true

var trims = "        nice";
var trime = "      hello      ";
console.log(trime.trimStart());
console.log(trime.trimEnd());
console.log(trims.trim());
console.log(trims.toUpperCase());
console.log(trims.toLowerCase());

var hello = "Hello World!";
console.log(hello.includes("e")); // true
console.log(hello.includes("world")); // false
console.log(hello.includes("World")); // true
console.log(hello.includes("hello", 6)); // false

var a = "I am learning javascript";
console.log(a.indexOf("learning")); // 5
console.log(a.indexOf("a")); // 2

var b = "hello world";
console.log(b.lastIndexOf("l")); // 9
console.log(b.lastIndexOf("l", 1)); // -1

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("SPAIN"));

var myself = "hazzaz";
console.log(myself.repeat(4)); // hazzazhazzazhazzazhazzaz

var a = "hello world";
console.log(a.replace("l", "d"));
console.log(a.replaceAll("l", "d"));


var sliced = "hazzaz abdul mannan";
console.log(sliced.slice(0, 6)); // hazzaz
console.log(sliced.slice(-1));

console.log(sliced.split(" ")); // ["hazzaz", "abdul", "mannan"]

console.log(sliced.substring(2, 0));
console.log(sliced.substring(-10)); //hazzaz abdul mannan
