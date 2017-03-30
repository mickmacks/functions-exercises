// // TODO: add your solutions here!

// // PLEASE UNCOMMENT FROM THE NUMBERED TITLE TO BOTTOM OF CODE SNIPPET.

// // 1. Concatenate 2 words with a function.

// function buildSentence(wordOne, wordTwo) {
// 	return wordOne + wordTwo;
// } 

// var completeSentence = buildSentence('dog', 'house');
// completeSentence;

// // 2. Create n console logs

// function multipleLogs(words, n) {

// 	for (var i = 0; i <= n; i++) {
// 		console.log(words + i);
// 	}

// 	return multipleLogs;
// }

// multipleLogs("I am ", 10);

// // 3. Build your own power function
// function powerOfN(x, n) {
  
//   var result = 1;

// 	for (var i = 0; i <= n; i++) {
// 		result = result * x;
// 	}

//   return result;

// } 
// powerOfN(4,5);

// // 4. Area of a circle: πr2

// function findCircleArea(r) {
  
//   var radiusSquared = r * r;
//   var area = Math.PI * radiusSquared;
//   return area;
// } 

// console.log(findCircleArea(6));

// // 5.  Pythagorean Theorem: a2 + b2 = c2

// function pythagoras(a, b) {

// 	return  Math.sqrt((a * a) + (b * b));

// }

// console.log(pythagoras(2, 3));

// // 6. Is X Evenly Divisible by Y ?

// function evenDivide(x, y) {

// 	if (x % y === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(evenDivide(4,2));

// // 7. Vowel Count

// function countVowels(word) {

// 	var result = 0;

// 	for (var i = 0; i < word.length; i++) {
// 		if (word[i] === 'a') {
// 			result++;
// 		} else if (word[i] === 'e') {
// 			result++;
// 		} else if (word[i] === 'i') {
// 			result++;
// 		} else if (word[i] === 'o') {
// 			result++;
// 		} else if (word[i] === 'u') {
// 			result++;
// 		}
// 	}

// 	return result;

// }

// console.log(countVowels('BaBaBlackSheep'));

// // 8. Does the array contain 'wdi'

// function checkForMatch(words) {

// 	for (var i = 0; i < words.length; i++) {
// 		if (words[i] === 'wdi') {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// console.log(checkForMatch(['testing', 'wordsandwords', 'wdi', 'otherwords']));

// // 9. Find the longest word in a sentence.

// // a) Create a function with a parameter, phrase, that will use a string as an argument.
// // b) Create a variable, words, to hold the broken down original string as words.
// // c) Create a variable, currentLongestLength, that will hold a length, to check later.
// // d) Create a variable, currentLongestLengthIndex, to remember the index number of the previous variable.
// // e) Using a for ... loop, let i equal the length of the current array element.
// // f) If i > currentLongestLength, replace it with the new value and update currentLongestLengthIndex with i.
// // g) Use the index number to return the current longest word, after the loop is complete.
// // h) Run the function, for example in a console log, to show the returned data to me. 

// // ES5

// function findLongestWord(phrase) {

// 	var longestLength = 0;
// 	var longestLengthIndex = 0;

// 	var words = phrase.split(" ");

// 	for (var i = 0; i < words.length; i++) {
// 		if (words[i].length > longestLength) {
// 			longestLength = words[i].length
// 			longestLengthIndex = i;
// 		}
// 	}

// 	return words[longestLengthIndex];
// }

// console.log(findLongestWord('Hello? It\'s me. I was wondering if after all these years you\'d like to meet.'));


// // ES6

// function findLongestWord(sentence) {

// 	let wordsArray = sentence.split(" ");
// 	let longestWord;

// 	for (let i = 0; i < wordsArray.length; i++) {

// 		let currentWord = wordsArray[i];

// 		if (i === 0 || currentWord.length > longestWord.length) {

// 			longestWord = currentWord;

// 		}
		
// 	}

// 	return longestWord;

// }

// console.log(findLongestWord(`Somebody once told me the world was neverending`));

// // 10.

// // a) Create a function with a parameter, tiers, that will use a number as an argument/input.
// // b) Using a for ... loop, starting with i = 1, run the loop until i <= tiers, then add 1 to i.
// // c) Create a variable to store the current string of stars, starting with no stars.
// // d) When the loop completes, console.log the current string of stars, then run the loop again until i <= tiers.

// // Create 

// function printTriangle(length) {

// 	for (var a = 1; a <= length; a++) {
// 		var stars = '';

// 		for (var b = length - 1; b > 0; b--) {
// 			stars += ' ';
// 		}
		
// 		stars += ' *';

// 		console.log(stars);
// 	}
// }

// printTriangle(9);

// // I wasn't understanding how loops worked so I decided to try understanding by explaining solutions.js solution step by step.

// Create a function that accepts one parameter, a number, in this case length, and uses it to create a pyramid.
// function printPyramid(length) {

// 	// Using a for loop that tracks the number given in length, create a line for each tier of the pyramid. 
// 	// The first time, i = 1, which is less than length 10, so a tier variable that presently holds and empty string is created.

// 	for(var i = 1; i <= length; i++) {
// 		var tier = '';

// 		// IMPORTANT: Run a new loop INSIDE the first loop, so that only when the second loop conditions are met does a new loop begin.
// 		// Create a new loop that takes length-1 to create the correct number of spaces, for each time the loop is run.

// 		for(var j = length - i; j > 0; j--) {
// 			tier += ' ';
// 		}

// 		// Also inside the first loop, and after the second, create another loop that adds the correct amount of stars, based off the current i value.
// 		// With the correct number of spaces, and then the correct number of stars printed, the loop is now ready to complete.

// 		for(var k = 0; k < i; k++) {
// 			tier += '* ';
// 		}

// 		// Log the current value of tier. From creating a string, to adding the correct number of spaces, then the correct number of stars, we should have a complete first line.
		
// 		console.log(tier);

// 		// Let the loop run again.
// 	}
// }
// printPyramid(10);

// // New attempt at writing the loop

// 10. Create a pyramid using the printTriangle function.

// Create a function that uses one parameter, length (num), to create a pyramid of stars.

function createPyramid(length) {

// Use a for loop to create a line, fill that line with x spaces, and then add y stars to the end.

	for (var i = 1; i <= length; i++) {

		// Create an empty string at the start of each loop.
		var stars = '';

		// Create a new loop, inside this loop, that adds the correct number of spaces then stars to the current stars line.

		for (var j = length - i; j > 0; j--) {
			stars += ' ';
		}

		// Create a new loop that adds the correct number of stars to our current 'stars' value, which holds just spaces.

		for (var k = 0; k < i; k++) {
			stars += '* ';
		}

		// Log the current value of 'stars' before repeating the loop.
		console.log(stars);

	// Let the loop run again.
	}
}

createPyramid(9);