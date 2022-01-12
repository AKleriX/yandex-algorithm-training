getLanguages = (data) => {
    let n = +data[0],
        set = new Set(),
        setsArray = [],
        correctPosition = 1;

    while (n > 0){
        setsArray.push(new Set());
        for (let i = correctPosition + 1; i <= +data[correctPosition] + correctPosition; i++){
            set.add(data[i].replace('\r',''));
            setsArray[setsArray.length -  1].add(data[i].replace('\r',''));
        }
        correctPosition += +data[correctPosition] + 1;
        n--;
    }



    for (let i = 1; i < setsArray.length; i++){
        setsArray[i] = new Set([...setsArray[i]].filter(item => setsArray[i - 1].has(item)));
    }

    return setsArray[setsArray.length - 1].size + '\n' + Array.from(setsArray[setsArray.length - 1]).join('\n') +
        '\n' + set.size + '\n' + Array.from(set).join('\n');
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getLanguages(input);

fs.writeFileSync("output.txt", res.toString());