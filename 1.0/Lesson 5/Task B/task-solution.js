getSumCount = (data) => {
  let k = Number(data[0].trim().split(' ')[1]),
    nums = data[1].trim().split(' '),
    prefixSumsCounter = new Map(),
    lastSum = 0,
    sumsCounter = 0;

  prefixSumsCounter.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    lastSum += Number(nums[i]);
    if (prefixSumsCounter.has(lastSum))
      prefixSumsCounter.set(lastSum, prefixSumsCounter.get(lastSum) + 1);
    else prefixSumsCounter.set(lastSum, 1);
    if (prefixSumsCounter.has(lastSum - k)) sumsCounter += prefixSumsCounter.get(lastSum - k);
  }

  return sumsCounter;
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const input = fileContent.toString().trim().split('\n');

let res = getSumCount(input);

fs.writeFileSync('output.txt', res.toString());
