function findLongestAndShortestWord(sentence) {
    const words = sentence.match(/\b\w+\b/g);

    let longestWord = words[0];
    let shortestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    });

    return `Longest -> ${longestWord}\nShortest -> ${shortestWord}`;
}

console.log(findLongestAndShortestWord('Hello how are you today? I hope you are fine'));
console.log(findLongestAndShortestWord('Lorem Ipsum is dummy text of the typesetting industry.'));
