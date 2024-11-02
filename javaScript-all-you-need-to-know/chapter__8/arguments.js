function hello() {
	console.log(typeof arguments);
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

console.log(hello("hey", "hello"));

/**
 *
 * @param {string} greeting
 * @param {string} name
 * @returns
 */

const sayHi = (greeting, name) => {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]); // not work
	}
};

// console.log(sayHi());
