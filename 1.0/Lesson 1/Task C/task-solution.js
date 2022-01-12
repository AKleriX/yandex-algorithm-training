phoneNum = (data) => {
    let result = data.map(num => {
        if ((num[0] !== '+') && (num[0] !== '8'))
            num = '8495' + num;
        num = num.replace('+7', '8');
        num = num.replace(/\(?\)?-?/g, '');
        return num;
    });
    let ans = '';
    for (let i = 1; i < 4; i++) {
        if (result[i] === result[0])
            ans += 'YES\n';
        else
            ans += 'NO\n'
    }
    return ans;
};

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = phoneNum(lines);
    process.stdout.write(res + '');
    process.exit();
});