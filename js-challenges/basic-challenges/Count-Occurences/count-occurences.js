// Solution 01
function countOccurences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

console.log(countOccurences("hazzaz", "z"));

// Solution 02
const countOccurencesSplit = (str, char) => str.split(char).length - 1;

module.exports = countOccurencesSplit
