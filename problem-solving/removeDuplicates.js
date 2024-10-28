// removeDuplicates
// takes an array of names
// return new array without duplicates

function removeDuplicates(arrOfNames) {
	let outputs = [];
	for (let i = 0; i < arrOfNames.length; i++) {
		if (!outputs.includes(arrOfNames[i])) {
			outputs.push(arrOfNames[i]);
		}
	}
	return outputs;
}

console.log(
	removeDuplicates([
		"Zara",
		"Sadia",
		"Mahin",
		"Adnan",
		"Maisha",
		"Adnan",
		"Faiyaz",
		"Faiyaz",
		"Hazzaz",
		"Hazzaz",
	])
);
