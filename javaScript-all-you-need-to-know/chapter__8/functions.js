function add(a, b) {
	return a + b;
}

console.log(add(10, 20));

function sub(a, b) {
	return a - b;
}

console.log(sub(50, 20));

/**
 *
 * @param {Array} arr
 * @return {number}
 */

function sum(arr) {
	let result = 0;

	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}

	return result;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
