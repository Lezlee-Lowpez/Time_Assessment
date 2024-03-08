// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function sumToZero(arr){
    for (let i = 0; i<arr.length; i++) {

        if ((-(arr[i])) in arr){
            return true
        }
    } return false
}

// console.log(sumToZero([1, 2, 3]))
// runtime = o(n)
//space = o(1)


// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function unique(word) {
    let seen = [];
    for (let i = 0; i < word.length; i++) {
        if (!seen.includes(word[i])) {
            seen.push(word[i]);
        } else {
            return false;
        }
    }
    return true;
}


// console.log(unique("Moonday"))// return false
// console.log(unique("Monday"))//return true
// Runtime  = o(n^2)
//space = o(n)


// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(sentence){
    let lowerCaseSentence = sentence.toLowerCase()

    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCaseSentence.includes(letter)) {
            return false;
        }
}  return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// Runtime = o(n^2)
//space = o(n)


// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(words) {
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

// console.log(findLongestWord(["hello", "world", "javascript", "stormi"])); 
//Runtime = o(n)
//space = o(1)
