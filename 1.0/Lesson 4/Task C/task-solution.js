getFreqWord = (data) => {
    let dicWords = new Map(),
        maxCount = 0,
        maxFreqWords = [];

    if (data.length === 1 && data[0] === '')
        return '';

    data.forEach(word => {
        if (!dicWords.has(word))
            dicWords.set(word, 0);
        dicWords.set(word, dicWords.get(word) + 1);
        if (dicWords.get(word) === maxCount)
            maxFreqWords.push(word);
        if (dicWords.get(word) > maxCount) {
            maxFreqWords = [];
            maxFreqWords.push(word);
            maxCount = dicWords.get(word);
        }
    })


    return maxFreqWords.sort()[0];
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(/\s+/);

let res = getFreqWord(input);

fs.writeFileSync("output.txt", res.toString());