let accounts = [[1,2,3],[3,2,1]];

function richestCustomer(accounts: number[][]): number{

    let maxi = 0;
    for(let i = 0; i < accounts.length; i++){
        let temp = 0;
        for(let j = 0; j < accounts[i].length; j++){
            temp += accounts[i][j];
        }
        maxi = Math.max(maxi, temp);
    }
    return maxi;
}

console.log(richestCustomer(accounts));