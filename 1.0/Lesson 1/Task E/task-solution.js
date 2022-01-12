addressTask = (data) => {
    let m = +data[1],
        k1 = +data[0],
        k2 = +data[2],
        p2 = +data[3],
        n2 = +data[4],
        apInP,
        temp = [],
        ansFlags = [0, 0],
        ans = [-1, -1];

    for (let i = 1; i <= 1000000; i++) {
        apInP = i * m;
        temp = setTempParameters(k2, m, i);
        if (p2 === temp[0] && n2 === temp[1]) {
            temp = setTempParameters(k1, m, i);
            if (ans[1] === -1){
                ans[1] = temp[1];
                ansFlags[1] = 1;
            }
            if (ans[0] === -1){
                ans[0] = temp[0];
                ansFlags[0] = 1;
            }
            if (ansFlags[0] > 0 && temp[0] !== ans[0])
                ansFlags[0]++;
            if (ansFlags[1] > 0 && temp[1] !== ans[1])
                ansFlags[1]++;
        }
    }
    if (ansFlags[0] > 1)
        ans[0] = 0;
    if (ansFlags[1] > 1)
        ans[1] = 0;

    return ans;
}

setTempParameters = (k, m, i) => {
    let tempP = Math.floor((k - 1) / (m * i)) + 1,
        tempK = k - (tempP - 1) * (m * i),
        tempN = Math.floor((tempK - 1) / i) + 1;

    return [tempP, tempN];
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split(' ');
    res = addressTask(lines);
    process.stdout.write(res[0] + ' ' + res[1]);
    process.exit();
});