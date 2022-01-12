getProducts = (data) => {
    let buyers = new Map(),
        resultCatalog = '';

    for (let i = 0; i < data.length; i++) {
        if (!buyers.has(data[i].trim().split(' ')[0])){
            buyers.set(data[i].trim().split(' ')[0], new Map());
        }
        if (!buyers.get(data[i].trim().split(' ')[0])
            .has(data[i].trim().split(' ')[1])){
            buyers.get(data[i].trim().split(' ')[0])
                .set(data[i].trim().split(' ')[1], 0);
        }
        buyers.get(data[i].trim().split(' ')[0])
            .set(data[i].trim().split(' ')[1],
                +buyers.get(data[i].trim().split(' ')[0])
                    .get(data[i].trim().split(' ')[1]) + +data[i].trim().split(' ')[2]);

    }

    let buyersNamesSort = Array.from(buyers.keys()).sort();

    for (let buyer of buyersNamesSort){
        resultCatalog += buyer + ':\n';
        let productNamesSort = Array.from(buyers.get(buyer).keys()).sort();
        for (let product of productNamesSort)
            resultCatalog += product + ' ' + buyers.get(buyer).get(product) + '\n';
    }

    return resultCatalog.slice(0, resultCatalog.length - 1);
    
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getProducts(input);

fs.writeFileSync("output.txt", res.toString());