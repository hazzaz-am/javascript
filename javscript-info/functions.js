// prime numbers
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) {
      continue;
    }
    console.log(i);
  }
}

showPrimes(20);

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Make two variants of checkAge:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// Using a question mark operator ?
function checkAge(age) {
  return age > 18 ? true : "Did parents allow you?";
}

// Using OR ||
function checkAge(age) {
  return age > 18 || "Did parents allow you?";
}

// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
  console.log(a > b ? b : a);
}
min(2, 5) == 2;


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  console.log(x ** n);
}
pow(3, 2);

function pow(x, n) {
  let result = x;
  for(let i = 1; i < n; i++) {
    result *= x;
  }
  return result
}
