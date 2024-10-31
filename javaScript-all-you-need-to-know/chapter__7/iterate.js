var obj = {
	a: 10,
	b: 20,
	10: 30,
};

// in operator
console.log('a' in obj); // true
console.log('c' in obj); // false

// for in
for (var i in obj) {
	console.log(typeof i); // string

  if (i === "a") {
    console.log(true); // true
  }

	console.log(obj[i]); // 10, 20, 30
}


