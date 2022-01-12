squareSolve = (data) => {
    let ans;
    if (+data[0] === 0 && +data[1] === Math.pow(+data[2], 2))
        return 'MANY SOLUTIONS';
    if (+data[2] < 0 || (+data[0] === 0 &&
        (Math.pow(+data[2], 2) - (+data[1])) !== 0))
        return 'NO SOLUTION'
    ans = (Math.pow(+data[2], 2) - (+data[1]))/ +data[0];
    if (((Math.pow(+data[2], 2) - (+data[1])) % +data[0]) !== 0)
        return 'NO SOLUTION'
    return ans;
};

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = squareSolve(lines);
    process.stdout.write(res + '');
    process.exit();
});
