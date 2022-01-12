timeCount = (data) => {
    let a = +data[0],
        b = +data[1],
        n = +data[2],
        m = +data[3];

    let minA = n + (n - 1) * a,
        maxA = minA + a * 2,
        minB = m + (m - 1) * b,
        maxB = minB + b * 2;

    if (minA >= minB && minA <= maxB) {
        if (maxA <= maxB)
            return minA.toString() + ' ' + maxA.toString();
        if (maxA > maxB)
            return minA.toString() + ' ' + maxB.toString();
        if (minA === maxB)
            return minA.toString() + ' ' + maxB.toString();
    }

    if (minB >= minA && minB <= maxA) {
        if (maxB <= maxA)
            return minB.toString() + ' ' + maxB.toString();
        if (maxB > maxA)
            return minB.toString() + ' ' + maxA.toString();
        if (minB === maxA)
            return minB.toString() + ' ' + maxA.toString();
    }


    return '-1';
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = timeCount(lines);
    process.stdout.write(res);
    process.exit();
});