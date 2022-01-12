getProductThreeNumbers = (data) => {
    data = data.map(Number);

    let min = Math.min.apply(null, data),
        max = Math.max.apply(null, data);


    let maxNumbers = [min - 1, min - 1, min - 1, max + 1, max + 1];

    if (data.length < 4)
        return data.join(' ');

    for (let i = 0; i < data.length; i++) {
        if (+data[i] >= +maxNumbers[0]) {
            maxNumbers[2] = maxNumbers[1];
            maxNumbers[1] = maxNumbers[0];
            maxNumbers[0] = +data[i];
        } else if (+data[i] > maxNumbers [1]) {
            maxNumbers[2] = maxNumbers[1];
            maxNumbers[1] = +data[i];
        } else if (+data[i] > maxNumbers [2]) {
            maxNumbers[2] = +data[i];
        }
        if (+data[i] <= +maxNumbers[3]) {
            maxNumbers[4] = maxNumbers[3];
            maxNumbers[3] = +data[i];
        } else if (+data[i] < maxNumbers [4])
            maxNumbers[4] = +data[i];

    }

    if (((+maxNumbers[3] * +maxNumbers[4] * +maxNumbers[0]) > (+maxNumbers[0] * +maxNumbers[1] * maxNumbers[2])))
        return maxNumbers[0] + ' ' + maxNumbers[3] + ' ' + maxNumbers[4];

    return maxNumbers[1] + ' ' + maxNumbers[0] + ' ' + maxNumbers[2];

}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(' ');

let res = getProductThreeNumbers(input);

fs.writeFileSync("output.txt", res.toString());