// object literal
var obj = {
	a: 10,
	b: 20,
};

obj.c = 30;
console.log(obj);

obj.a = 40;
console.log(obj);

// object constructor
var obj1 = Object();

obj1.name = "Hazzaz";
obj1.age = 23;

console.log(obj1);

// new keyword
var obj = new Object();
obj.isLogin = true;

// console.log(obj);

var isHeLoggedin = "isLogin";
obj.account = "Facebook";

console.log(obj["account"]);
console.log(obj[isHeLoggedin]);

// delete property
obj.account = null;
delete obj.isLogin;
// console.log(obj);



