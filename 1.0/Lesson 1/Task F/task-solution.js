notebooksTable = (data) => {
    let ans =[+data[0] + +data[2], Math.max(+data[1], +data[3])];
    let minSquare = (+data[0] + +data[2]) * Math.max(+data[1], +data[3]);

    if (minSquare > ((+data[0] + +data[3]) * Math.max(+data[1], +data[2]))){
        ans = [+data[0] + +data[3], Math.max(+data[1], +data[2])];
        minSquare = (+data[0] + +data[3]) * Math.max(+data[1], +data[2]);
    }

    if (minSquare > ((+data[1] + +data[2]) * Math.max(+data[0], +data[3]))){
        ans = [+data[1] + +data[2], Math.max(+data[0], +data[3])];
        minSquare = (+data[1] + +data[2]) * Math.max(+data[0], +data[3]);
    }

    if (minSquare > ((+data[1] + +data[3]) * Math.max(+data[0], +data[2]))){
        ans = [+data[1] + +data[3], Math.max(+data[0], +data[2])];
        minSquare = (+data[1] + +data[3]) * Math.max(+data[0], +data[2]);
    }

    return ans;
};

let cnt, res;
process.stdin.on('data', data => {
    const lines = data.toString().split(' ');
    res = notebooksTable(lines);
    process.stdout.write(res[0] + ' ' + res[1]);
    process.exit();
});