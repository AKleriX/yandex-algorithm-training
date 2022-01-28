getStyle = (data) => {
  let tshirtsColors = data[1].trim().split(' ').map(Number),
    pantsColors = data[3].trim().split(' ').map(Number),
    minDif = Math.abs(tshirtsColors[0] - pantsColors[0]),
    minDifIndex = [0, 0],
    tshirtsPointer = 0;
    pantsPointer = 0;

  while (tshirtsPointer < tshirtsColors.length && pantsPointer < pantsColors.length){
    if (minDif > Math.abs(tshirtsColors[tshirtsPointer] - pantsColors[pantsPointer])){
      minDif = Math.abs(tshirtsColors[tshirtsPointer] - pantsColors[pantsPointer]);
      minDifIndex = [tshirtsPointer, pantsPointer];
    }    
    if (tshirtsColors[tshirtsPointer] > pantsColors[pantsPointer]) pantsPointer++;
    else tshirtsPointer++;
  }
  
  return tshirtsColors[minDifIndex[0]] + ' ' + pantsColors[minDifIndex[1]];
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const input = fileContent.toString().trim().split('\n');

let res = getStyle(input);

fs.writeFileSync('output.txt', res.toString());
