var arr = [1, 2, 3, 4, 5, 6, 7];

//  add element to end

arr.push(8);
arr.push("hello")
console.log(arr);

arr[arr.length] = 9;

console.log(arr);

// // remove element from end
arr.pop();

arr.length = arr.length - 1;

console.log(arr);

// // // add element to front
arr.unshift(0);

// add element
arr.splice(1, 0, 2);

// remove element
arr.splice(1, 1, 1);

// update elemetn
arr.splice(0, 1, 0);

var arr = [];
var rec = arr.shift();
console.log(rec);
console.log(arr);
