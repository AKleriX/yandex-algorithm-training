getMayaWord = (data) => {
    let letters = data[1].trim(),
        words = data[2].trim(),
        lettersCounter = new Map(),
        wordsCounter = 0;

    for (let i = 0; i < letters.length; i++){
        if (!lettersCounter.has(letters[i]))
            lettersCounter.set(letters[i], [0, 0]);
        lettersCounter.set(letters[i],
            [lettersCounter.get(letters[i])[0] + 1, lettersCounter.get(letters[i])[1]]);
    }

    for (let i = 0; i < letters.length; i++)
        reInitSecondValueMap(lettersCounter, words[i], 1);

    wordsCounter += comparisonFirstAndSecondValuesMap(lettersCounter);

    for (let i = letters.length; i < words.length; i++){
        reInitSecondValueMap(lettersCounter, words[i - letters.length], -1);
        reInitSecondValueMap(lettersCounter, words[i], 1);
        wordsCounter += comparisonFirstAndSecondValuesMap(lettersCounter);
    }


    return wordsCounter;
}

reInitSecondValueMap = (map ,key, difValue) => {
    if (map.has(key))
        map.set(key, [map.get(key)[0], (map.get(key)[1] + difValue)]);
    return map;
}

comparisonFirstAndSecondValuesMap = (map) => {
    let correctLetters = 0;
    for (let key of map.keys()){
        if (map.get(key)[0] !== map.get(key)[1])
            break;
        correctLetters++;
    }
    if (correctLetters === map.size)
        return 1;
    return 0;
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getMayaWord(input);

fs.writeFileSync("output.txt", res.toString());