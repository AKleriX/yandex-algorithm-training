getBalance = (data) => {
    const deposit = 'DEPOSIT',
        withdraw = 'WITHDRAW',
        balance = 'BALANCE',
        transfer = 'TRANSFER',
        income = 'INCOME';

    let balanceHistory = '',
        bankClientsAccounts = new Map();

    for (let commandNumber = 0; commandNumber < data.length; commandNumber++){
        switch (data[commandNumber].trim().split(' ')[0]){
            case deposit:{
                if (!bankClientsAccounts.has(data[commandNumber].trim().split(' ')[1]))
                    bankClientsAccounts.set(data[commandNumber].trim().split(' ')[1], 0);
                bankClientsAccounts.set(data[commandNumber].trim().split(' ')[1],
                    bankClientsAccounts.get(data[commandNumber].trim().split(' ')[1]) +
                    +data[commandNumber].trim().split(' ')[2]);
                break;
            }
            case withdraw:{
                if (!bankClientsAccounts.has(data[commandNumber].trim().split(' ')[1]))
                    bankClientsAccounts.set(data[commandNumber].trim().split(' ')[1], 0);
                bankClientsAccounts.set(data[commandNumber].trim().split(' ')[1],
                    bankClientsAccounts.get(data[commandNumber].trim().split(' ')[1]) -
                    +data[commandNumber].trim().split(' ')[2]);
                break;
            }
            case balance:{
                if (!bankClientsAccounts.has(data[commandNumber].trim().split(' ')[1]))
                    balanceHistory += 'ERROR\n';
                else
                    balanceHistory += bankClientsAccounts.get(data[commandNumber].trim().split(' ')[1]) + '\n';
                break;
            }
            case transfer:{
                if (!bankClientsAccounts.has(data[commandNumber].trim().split(' ')[1]))
                    bankClientsAccounts.set(data[commandNumber].trim().split(' ')[1], 0);
                if (!bankClientsAccounts.has(data[commandNumber].trim().split(' ')[2]))
                    bankClientsAccounts.set(data[commandNumber].trim().split(' ')[2], 0);
                bankClientsAccounts.set(data[commandNumber].trim().split(' ')[1],
                    bankClientsAccounts.get(data[commandNumber].trim().split(' ')[1]) -
                    +data[commandNumber].trim().split(' ')[3]);
                bankClientsAccounts.set(data[commandNumber].trim().split(' ')[2],
                    bankClientsAccounts.get(data[commandNumber].trim().split(' ')[2]) +
                    +data[commandNumber].trim().split(' ')[3]);
                break;
            }
            case income:{
                for (let client of bankClientsAccounts.keys()){
                    if (bankClientsAccounts.get(client) > 0)
                        bankClientsAccounts.set(client, bankClientsAccounts.get(client) +
                            Math.trunc((bankClientsAccounts.get(client) / 100) *
                                +data[commandNumber].trim().split(' ')[1]));
                }
                break;
            }
            default:
                break;
        }
    }



    return balanceHistory.slice(0, balanceHistory.length - 1);
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getBalance(input);

fs.writeFileSync("output.txt", res.toString());