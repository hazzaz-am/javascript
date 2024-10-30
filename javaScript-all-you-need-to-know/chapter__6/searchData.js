var arr = [1, 2, 3, 4, "nice", true];

console.log(arr.indexOf("nice"));

console.log(arr.includes(true));

var find = 10;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === find) {
		console.log("got it");
		isFound = true;
    break
	}
}

if (!isFound) {
	console.log("not found");
}
