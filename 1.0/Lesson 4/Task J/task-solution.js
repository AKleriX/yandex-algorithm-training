getCommonIdent = (data) => {
  const [n, c, d] = [
    data.split('\n')[0].trim().split(' ')[0],
    data.split('\n')[0].trim().split(' ')[1],
    data.split('\n')[0].trim().split(' ')[2]
  ];
  let code = data
      .split('\n')
      .slice(1 + Number(n))
      .join('\n'),
    keyWords = data.split('\n').slice(1, 1 + Number(n)).map(word => c === 'yes' ? word.trim() : word.trim().toLowerCase()),
    codeWords = code.trim().split(/[^a-z0-9_]+/i),
    identCounter = new Map();

  codeWords.forEach(word => {
    let comWord = c === 'yes' ? word.trim() : word.trim().toLowerCase();  
    if (comWord.length > 0 && !keyWords.includes(comWord) && (!/^\d+/.test(comWord) || d === 'yes') && (!/^\d+$/.test(comWord)))
      identCounter.set(comWord, identCounter.get(comWord) ? identCounter.get(comWord) + 1 : 1);      
  });
  
  let maxFreq = 0,
      freqWord;
  for (let word of identCounter)
    if (maxFreq < word[1]){
      maxFreq = word[1];
      freqWord = word[0];
    }
  return freqWord;
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const input = fileContent.toString().trim();

let res = getCommonIdent(input);

fs.writeFileSync('output.txt', res.toString());
