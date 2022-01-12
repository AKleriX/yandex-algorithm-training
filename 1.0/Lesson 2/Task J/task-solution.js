getTriangleFreq = (data) => {
    let n = +data[0],
        freq = data.slice(1),
        maxFreq = [4000],
        minFreq = [30],
        closer = 'closer',
        further = 'further';

    for (let i = 0; i < n; i++){
        freq[i] = freq[i].split(' ');
        freq[i][0] = +freq[i][0];
        if (freq[i].length > 1)
            freq[i][1] = freq[i][1].replace('\r', '');
    }


    for (let i = 1; i < n; i++) {
        let freqPos = Math.max(freq[i-1][0], freq[i][0]) - (Math.abs(freq[i-1][0]-freq[i][0])/2);
        if (freq[i][0] > freq[i-1][0]){
            if (freq[i][1] === further)
                maxFreq.push(freqPos);
            if (freq[i][1] === closer)
                minFreq.push(freqPos);
        } else {
            if (freq[i][1] === further)
                minFreq.push(freqPos);
            if (freq[i][1] === closer)
                maxFreq.push(freqPos);
        }
    }


    let max, min,
        difference = 4000;

    for (let i = 0; i < maxFreq.length; i++) {
        for (let j = 0; j < minFreq.length; j++){
            if ((maxFreq[i] - minFreq[j]) < difference && (maxFreq[i] - minFreq[j]) >= 0){
                max = maxFreq[i];
                min = minFreq[j];
                difference = maxFreq[i] - minFreq[j];
            }
        }
    }


    min = (Math.round(min * 1000000)/1000000).toString();
    if (min.indexOf('.') === -1)
        min += '.0';

    max = (Math.round(max * 1000000)/1000000).toString();
    if (max.indexOf('.') === -1)
        max += '.0';

    return min + ' ' + max;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getTriangleFreq(input);

fs.writeFileSync("output.txt", res.toString());