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
console.log(Boolean(' ')); // spaces are true
console.log(Boolean('Hazzaz'));
console.log(Boolean(null));
console.log(Boolean(undefined));

var x = true;
console.log(x.toString());

console.log(Boolean(NaN).toString());

console.log(Number("  123 "));
console.log(Number("   Hazza   "));
console.log(Number(null));
console.log(Number(undefined));



console.log( 4 ** (1/2) ); 
console.log( 8 ** (1/2) );  
console.log( 2 ** 5.5 );  
console.log( 2 ** 5 );  


let a = 1, b = 1;

let c = ++a; 
let d = b++;  

// a = 2
// b = 2
// c = 2
// d = 1

let as = 2;

let x = 1 + (as *= 2);

// as = 4
// x = 4

// type casting
// "" + 1 + 0; = 10
// "" - 1 + 0; = -1
// true + false; = 1
// 6 / "3"; = 2
// "2" * "3"; = 6
// 4 + 5 + "px"; = '9px'
// "$" + 4 + 5; = '$45'
// "4" - 2; = 2
// "4px" - 2; = NaN
// "  -9  " + 5; = '-9 5'
// "  -9  " - 5; = -14
// null + 1; = 1
// undefined + 1; = NaN
// " \t \n" - 2; = -2

// make correct calculation
// using unary
// let num1 = +prompt("First number?", 1);
// let num2 = +prompt("Second number?", 2);

// or
let num1 = prompt("First number?", 1);
let num2 = prompt("Second number?", 2);
// alert(++num1 + ++num2); 
// or
alert(Number(num1) + Number(num2))