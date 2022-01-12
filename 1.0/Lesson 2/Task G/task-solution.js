getProductTwoNumbers = (data) => {
    let maxNumbers = [0, 0, 0, 0];
    
    if (data.length < 3)
        return data.sort((a, b) => a - b).join(' ');

    for (let i = 0; i < data.length; i++) {
        if (+data[i] > 0) {
            if (+data[i] >= +maxNumbers[0]){
                maxNumbers[1] = maxNumbers[0];
                maxNumbers[0] = +data[i];
            } else if (+data[i] > maxNumbers [1])
                maxNumbers[1] = +data[i];
        } else {
            if (+data[i] <= +maxNumbers[2]){
                maxNumbers[3] = maxNumbers[2];
                maxNumbers[2] = +data[i];
            } else if (+data[i] < maxNumbers [3])
                maxNumbers[3] = +data[i];
        }
    }

    if (((+maxNumbers[2] * +maxNumbers[3]) > (+maxNumbers[0] * +maxNumbers[1])) ||
        ((+maxNumbers[2] + +maxNumbers[3]) !== 0 && (+maxNumbers[0] + +maxNumbers[1]) === 0))
        return maxNumbers.slice(2).sort((a, b) => a - b).join(' ');

    return maxNumbers[1] + ' ' + maxNumbers[0];

}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(' ');

let res = getProductTwoNumbers(input);

fs.writeFileSync("output.txt", res.toString());