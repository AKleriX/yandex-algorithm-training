solutionSystemEq = (data) => {
    let a = +data[0],
        b = +data[1],
        c = +data[2],
        d = +data[3],
        e = +data[4],
        f = +data[5];

    let d0 = a*d - c*b,
        dx = e*d - f*b,
        dy = a*f - c*e;

    if (d0 !== 0) {
        let x = dx/d0,
            y = dy/d0;

        return '2 ' + (Math.round(x * 100000)/100000) + ' ' + (Math.round(y * 100000)/100000);
    }
    else {
        if (dx === 0 && dy === 0) {
            if (a === 0 && b === 0 && c === 0 && d === 0) {
                if (e !== 0 || f !== 0)
                    return '0';
                else
                    return '5';
            }
            if (a === 0 && c === 0) {
                let y;
                if (b !== 0)
                    y = e / b;
                else
                    y = f / d;
                return '4  ' + (Math.round(y * 100000) / 100000);
            }
            if (b === 0 && d === 0) {
                let x;
                if (a !== 0)
                    x = e / a;
                else
                    x = f / c;
                return '3 ' + (Math.round(x * 100000) / 100000);
            } else {
                let b0,
                    k;
                if (b !== 0) {
                    k = -a / b;
                    b0 = e / b;
                } else {
                    k = -c / d;
                    b0 = f / d;
                }
                return '1 ' + (Math.round(k * 100000) / 100000) + ' ' + (Math.round(b0 * 100000) / 100000);
            }
        }
    }

    return '0';
}

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split('\n');
    res = solutionSystemEq(lines);
    process.stdout.write(res);
    process.exit();
});
