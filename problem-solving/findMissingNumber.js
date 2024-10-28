// findMissingNumber
// return the missing number from an array

const findMissingNumber = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let expectedNextNumber = arr[i] + 1;
		let nextNumber = arr[i + 1];
		if (!(expectedNextNumber === nextNumber)) {
			return expectedNextNumber;
		}
	}
};

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));