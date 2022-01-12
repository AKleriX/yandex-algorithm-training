getDetailsCount = (data) => {
    let n = +data[0],
        k = +data[1],
        m = +data[2],
        blanks = 0,
        ans = 0;

    if (m > k)
        return '0';

    while (Math.floor(n / k) > 0) {
        blanks = Math.floor(n / k);
        n -= blanks * k;

        let detCount = 0;
        for (let i = 1; i <= blanks; i++)
            detCount += Math.floor(k / m);

        n += (blanks * k) - (detCount * m);
        ans += detCount;
    }

    return ans.toString();
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split(' ');
    res = getDetailsCount(lines);
    process.stdout.write(res);
    process.exit();
});