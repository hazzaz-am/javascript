var str = '232';
var n = 10;

console.log(Number(str));
console.log(Number.parseInt(str));
console.log(n.toString());

console.log(String(Infinity));
console.log(Boolean(-Infinity));

console.log(Boolean(-3));

// Falsy Values
0
-0
''
null
undefined
NaN

console.log(Boolean(0));
console.log(Boolean(-56));
console.log(Boolean(''));
console.log(Boolean('Hazzaz'));
console.log(Boolean(null));
console.log(Boolean(undefined));

var x = true;
console.log(x.toString());

console.log(Boolean(NaN).toString());