// getMaxProduct
// takes array of integers
// maximum product than can be obtained multiplying two distinct elements from an array

const getMaxProduct = (arr) => {
	let maximumProduct = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				continue;
			} else if (arr[i] * arr[j] > maximumProduct) {
				maximumProduct = arr[i] * arr[j];
			}
		}
	}

	return maximumProduct;
};

console.log(getMaxProduct([2, 3, 5, 6, 7]));

//  14
// 21
// 35
// 42
// 42
