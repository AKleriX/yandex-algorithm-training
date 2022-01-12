isTriangle = (data) => {
    let result;
    if (+getMaxOfArray(data) >= +data[0] + +data[1] + +data[2] - getMaxOfArray(data)) {
        return 'NO';
    }
    return 'YES';
};

getMaxOfArray = (array) => {
    return Math.max.apply(null, array);
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = isTriangle(lines);
    process.stdout.write(res + '');
    process.exit();
});
