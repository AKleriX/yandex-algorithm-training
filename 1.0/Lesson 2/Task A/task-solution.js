isListGrows = (data) => {
    for (let i = 0; i <= (data.length - 2); i++) {
        if (+data[i] >= +data[i + 1])
            return 'NO';
    }
    return 'YES';
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split(' ');
    res = isListGrows(lines);
    process.stdout.write(res);
    process.exit();
});