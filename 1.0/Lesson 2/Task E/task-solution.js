getBestPosition = (data) => {

    let playersCount = +data[0],
        players = data[1].trim().split(' ').map(Number),
        sortPoints = [...players].sort((a, b) => b - a),
        maxCount = sortPoints[0],
        correctPosition = -1,
        maxCheck = false,
        playerPoint = 0;


    for (let j = 0; j < (playersCount - 1); j++) {
        if (maxCheck) {
            if (((players[j] % 10) === 5) && (players[j] > players [j + 1]) && (players[j] > playerPoint)) {
                if (correctPosition === -1) correctPosition = playersCount - 1;
                for (let i = 0; i <= correctPosition ; i++) {
                    if (sortPoints[i] === players[j]) {
                        playerPoint = players[j];
                        correctPosition = i;
                        break;
                    }
                }
            }
        }
        else if (!maxCheck && maxCount === players[j])
            maxCheck = true;
    }

    return correctPosition + 1;
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getBestPosition(input);

fs.writeFileSync("output.txt", res.toString());