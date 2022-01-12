isListGrows = (data) => {
    let constant = 0,
        ascending = 0,
        descending = 0;

    for (let i = 0; i <= (data.length - 3); i++) {
        if (+data[i] === +data[i + 1])
            constant++;
        if (+data[i] < +data[i + 1])
            ascending++;
        if (+data[i] > +data [i + 1])
            descending++;
    }

    if (constant === (data.length - 2))
        return 'CONSTANT';
    if (ascending === (data.length - 2))
        return 'ASCENDING';
    if (descending === (data.length - 2))
        return 'DESCENDING';
    if ((constant + ascending) === (data.length - 2))
        return 'WEAKLY ASCENDING';
    if ((constant + descending) === (data.length - 2))
        return 'WEAKLY DESCENDING';

    return 'RANDOM';
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const numbers = fileContent
    .toString()
    .trim()
    .split('\n');

let res = isListGrows(numbers);

fs.writeFileSync("output.txt", res);