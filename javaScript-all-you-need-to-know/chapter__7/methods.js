var obj = {
	a: 10,
	b: 20,
	c: 30,
	d: {
		e: 40,
	},
};

console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]

console.log(Object.values(obj)); // [ 10, 20, 30 ]

console.log(Object.entries(obj)); // [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]

// create new object from existing object
var obj1 = Object.assign({}, obj);

console.log(obj1); // { a: 10, b: 20, c: 30 }

console.log(obj === obj1); // false

obj1.d = 40;
console.log(obj1); // { a: 10, b: 20, c: 30, d: 40 }

console.log(obj.d.f.h.i); // { a: 10, b: 20, c: 30 }

// one level nested copy
obj1.d.e = "I changed";
console.log(obj1.d.e);
console.log(obj.d.e);

// stringify
var obj1 = JSON.parse(JSON.stringify(obj));

obj.d.e = 40 * 2;

console.log(obj);
console.log(obj1);
