/**
 * We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

1. Zero is even.
2. One is odd.
3. For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
 */
function isEven(n) {
  if (n === 0) return true;
  else if (n === 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
