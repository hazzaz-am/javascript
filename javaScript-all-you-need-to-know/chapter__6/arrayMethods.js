var arr = [1, 2, 3, 4, 5, 6, 7];

var joined = arr.join("");
console.log(joined);

arr.fill("hello");
arr.fill("hi", 2, 5);
arr.fill("hi", -6, -5);

var arr1 = [8, 9, 10];
var concateneted = arr.concat(arr1, [11, 12, 13, 14], [[15, 16, 17]]);

var newArr = Array.from(arr1);
newArr[3] = 11;

console.log(arr1);
console.log(newArr);
