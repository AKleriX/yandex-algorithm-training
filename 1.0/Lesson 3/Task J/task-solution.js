getPoints = (data) => {
    let t = +data[0].trim().split(' ')[0],
        d = +data[0].trim().split(' ')[1],
        n = +data[0].trim().split(' ')[2],
        pos = [0, 0, 0, 0];

    for (let i = 1; i <= n; i++){
        pos = extend(pos, t);
        let navX = +data[i].trim().split(' ')[0],
            navY = +data[i].trim().split(' ')[1],
            navPos = extend([navX + navY, navX + navY,
                navX - navY, navX - navY], d);
        pos = intersect(pos, navPos);
    }

    let points = [];

    for (let i = pos[0]; i <= pos[1]; i++) {
        for (let j = pos[2]; j <= pos[3]; j++){
            if ((i + j) % 2 === 0){
                let x = ~~(i + j) / 2,
                    y = i - x;
                points.push(x + ' ' + y);
            }
        }
    }

    return points.length.toString() + '\n' + points.join('\n');

}

extend = (position, distant) => {
   return [position[0] - distant, position[1] + distant, position[2] - distant, position[3] + distant];
}

intersect = (rectOne, rectTwo) => {
    return [Math.max(rectOne[0], rectTwo[0]), Math.min(rectOne[1], rectTwo[1]),
        Math.max(rectOne[2], rectTwo[2]), Math.min(rectOne[3], rectTwo[3])];
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getPoints(input);

fs.writeFileSync("output.txt", res.toString());