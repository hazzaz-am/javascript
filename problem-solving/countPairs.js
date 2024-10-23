// countpairs
// params => lowecase letter and digits mixed
// count all pairs of characters that add up to an even number
// return the pair number

function countPairs(mixedStr) {
  let count = 0;
  const mixedStrNum = mixedStr.split("");
  for (let i = 0; i < mixedStrNum.length; i++) {
    const integer = Number(mixedStrNum[i]);
    if (integer && integer % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countPairs("a2b2c2d2"));
