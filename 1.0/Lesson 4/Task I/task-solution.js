getMistakesCount = (data) => {
    let dicWordsCount = +data[0].trim(),
        textToVerify = data[data.length - 1].trim().split(' '),
        wordsDic = new Map(),
        correctWords = 0;

    for (let i = 1; i <= dicWordsCount; i++){
        if(!wordsDic.has(data[i].trim().toLowerCase()))
            wordsDic.set(data[i].trim().toLowerCase(), []);

        let tempArr = wordsDic.get(data[i].trim().toLowerCase());
        tempArr.push(data[i].trim());
        wordsDic.set(data[i].trim().toLowerCase(),
            tempArr);
    }

    for (let i = 0; i < textToVerify.length; i++){
        let isCorrect = false,
            uppCaseCounter = 0;

        for (let j = 0; j < textToVerify[i].length; j++){
            if (textToVerify[i][j] === textToVerify[i][j].toUpperCase()){
                if (wordsDic.has(textToVerify[i].toLowerCase())){
                    let tempWord = textToVerify[i].slice(0, j) + textToVerify[i][j] + textToVerify[i].slice(j + 1),
                        tempArr = wordsDic.get(textToVerify[i].toLowerCase());
                    for (let k = 0; k < tempArr.length; k++){
                        if (tempArr[k] === tempWord){
                            correctWords++;
                            isCorrect = true;
                            break;
                        }
                    }
                    if (isCorrect) break;
                } else {
                    if (textToVerify[i][j] === textToVerify[i][j].toUpperCase())
                        uppCaseCounter++;
                }
            }
        }
        if (uppCaseCounter === 1) correctWords++;
    }


    return textToVerify.length - correctWords;
}





const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getMistakesCount(input);

fs.writeFileSync("output.txt", res.toString());