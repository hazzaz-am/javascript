var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// increase value
for (var i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * 2;
}

console.log(arr);

// sum

var sum = 0;

for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log(sum);

// even number
for (var i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		console.log(arr[i]);
	}
}

// sum of even number
var sum = 0;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		sum += arr[i];
	}
}

console.log(sum);

// odd numbers
for (var i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 1) {
		console.log(arr[i]);
	}
}

// sum of odd numbers
var sum = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 1) {
		sum += arr[i];
	}
}

console.log(sum);
