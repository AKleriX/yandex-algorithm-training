getWordsNumbers = (data) => {
    let wordsCounts = '',
        dicWords = new Map();
    
    if (data.length === 1 && data[0] === '')
        return '';

    data.forEach(word => {
        if (!dicWords.has(word))
            dicWords.set(word, 0);
        wordsCounts += dicWords.get(word) + ' ';
        dicWords.set(word, dicWords.get(word) + 1);
    })

    return wordsCounts.trim();
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(/\s+/);

let res = getWordsNumbers(input);

fs.writeFileSync("output.txt", res.toString());