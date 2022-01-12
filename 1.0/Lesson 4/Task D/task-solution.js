getKeysLimits = (data) => {
    let limitsKeys = data[1].trim().split(' ').map(Number),
        press = data[3].trim().split(' ').map(Number),
        keysPressCount = new Map(),
        resultString = [];

    press.forEach(key => {
        if (!keysPressCount.has(key))
            keysPressCount.set(key, 0);
        keysPressCount.set(key, keysPressCount.get(key) + 1);
    })

    limitsKeys.forEach((press, index) => {
        if (keysPressCount.has(index + 1)) {
            if (keysPressCount.get(index + 1) <= press)
                resultString.push('NO');
            else resultString.push('YES');
        } else resultString.push('NO');
    })


    return resultString.join('\n');
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getKeysLimits(input);

fs.writeFileSync("output.txt", res.toString());