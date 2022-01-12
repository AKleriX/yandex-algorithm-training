getCubs = (data) => {
    let set1 = new Set(),
        set2 = new Set();

    for (let i = 1;
         i < +data[0].trim().split(' ')[0] + 1;
         i++)
        set1.add(+data[[i]]);

    for (let i = +data[0].trim().split(' ')[0] + 1;
         i < +data[0].trim().split(' ')[0] + +data[0].trim().split(' ')[1] + 1;
         i++)
        set2.add(+data[[i]]);


    let intersection = Array.from(new Set([...set1]
            .filter(item => set2.has(item))))
            .sort((a,b) => a-b),
        set1Difference = Array.from(new Set([...set1]
            .filter(item => !set2.has(item))))
            .sort((a,b) => a-b),
        set2Difference = Array.from(new Set([...set2]
            .filter(item => !set1.has(item))))
            .sort((a,b) => a-b);;


    return intersection.length + '\n' + intersection.join(' ') +
        '\n' + set1Difference.length + '\n' + set1Difference.join(' ') +
        '\n' + set2Difference.length + '\n' + set2Difference.join(' ');
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getCubs(input);

fs.writeFileSync("output.txt", res.toString());