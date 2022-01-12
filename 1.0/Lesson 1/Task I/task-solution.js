sizeComparison = (data) => {
    let a = +data[0],
        b = +data[1],
        c = +data[2],
        d = +data[3],
        e = +data[4];

    if ((a <= d && b <= e) || (b <= d && a <= e) ||
        (a <= d && c <= e) || (c <= d && a <= e) ||
        (b <= d && c <= e) || (c <= d && b <= e))
        return 'YES';


    return 'NO';
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = sizeComparison(lines);
    process.stdout.write(res);
    process.exit();
});
