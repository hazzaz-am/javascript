// findShortestWord
// takes a string
// return short word from the string
// if two shortest word there return the first one

// pseudo code
// make it a array
// loop through each word
// count the length of the word keep it in a variable and it's index number

function findShortestWord(str) {
	let strArr = str.split(" ");
	let shortWord = strArr[0];

	for (let i = 0; i < strArr.length; i++) {
		if (shortWord.length > strArr[i].length) {
			shortWord = strArr[i];
		}
	}
	return shortWord;
}

console.log(findShortestWord("Today is Monday"));
