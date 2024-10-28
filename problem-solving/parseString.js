// parseString
// if parameters number then return summation otherwise return concatenation

function parseString(...str) {
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		if (Number(str[i])) {
			sum += Number(str[i]);
		} else {
			return str.join(" ");
		}
	}
	return sum;
}

console.log(parseString("Summer", "2024"));
