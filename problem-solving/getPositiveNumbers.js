// getPositiveNumbers
// return new array with positive numbers

const getPositiveNumbers = (arr) => {
	return arr.filter((item) => item > 0);
};
console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));
