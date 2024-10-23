function isPalindrome(str) {
  let isPal = true;
  let strArr = str.split("");
  console.log(strArr);
  let i = 0;
  let j = strArr.length - 1;
  while (i < j) {
    if (strArr[i] === strArr[j]) {
      i++;
      j--;
    } else {
      isPal = false;
      break;
    }
  }

  return isPal;
}

console.log(isPalindrome("peep"));
