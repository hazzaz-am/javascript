var arr1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

var sum = 0;

for (var i = 0; i < arr1.length; i++) {
	for (var j = 0; j < arr1[i].length; j++) {
		sum += arr1[i][j];
	}
}

console.log(sum);
