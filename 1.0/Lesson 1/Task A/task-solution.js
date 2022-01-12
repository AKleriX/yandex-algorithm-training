cond = (data) => {
    let mas = data[0].toString().split(' ');
    let result;
    switch (data[1]){
        case 'freeze':{
            result = Math.min(+mas[0], +mas[1]);
            break;
        }
        case 'heat':{
            result = Math.max(+mas[0], +mas[1]);
            break;
        }
        case 'auto': {
            result = +mas[1];
            break;
        }
        default: {
            result = +mas[0];
            break;
        }
    }
    return result;
};

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = cond(lines);
    process.stdout.write(res + '');
    process.exit();
});