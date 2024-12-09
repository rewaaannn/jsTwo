function findLargestWord(inputString) {

    const words = inputString.split(" ");
    let largestWord = "";

    
    for (const word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    return largestWord;
}

const input = "this is a javascript string demo";
const result = findLargestWord(input);
console.log("Largest word:", result); 