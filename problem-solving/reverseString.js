// reverseString 
// params => string
// return reverse that string
// not using the built in 

function reverseString (str) {
  const strArr = str.split("");
  let i = 0;
  let j = strArr.length - 1;
  while(i < j) {
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join("")
}

console.log(reverseString("12345"));