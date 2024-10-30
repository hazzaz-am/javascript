var arr = [1, 2, 3, 4, 5, 6, 7];

// one way
for (var i = 0; i < arr.length / 2; i++) {
	var temp = arr[i];
	arr[i] = arr[arr.length - 1 - i];
	arr[arr.length - 1 - i] = temp;
}

// second way
var i = 0;
var j = arr.length - 1;

while(i < j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  ++i;
  --j;
}

// third way
arr.reverse()
console.log(arr);
