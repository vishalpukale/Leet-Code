var accounts = [[1, 2, 3], [3, 2, 1]];
function richestCustomer(accounts) {
    var maxi = 0;
    for (var i = 0; i < accounts.length; i++) {
        var temp = 0;
        for (var j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j];
        }
        maxi = Math.max(maxi, temp);
    }
    return maxi;
}
console.log(richestCustomer(accounts));
