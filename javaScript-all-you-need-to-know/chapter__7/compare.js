// compare objects
var obj = {
	a: 10,
	b: 20,
	c: {
		d: 30,
		e: 40,
	},
};

var obj1 = {
	a: 10,
	b: 20,
	c: {
		d: 30,
		e: 40,
	},
};

// different memory
console.log(obj === obj1); // false

// same memory
obj = obj1;
console.log(obj === obj1); // true

console.log(JSON.stringify(obj) === JSON.stringify(obj1)); // true
