var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function spiralMatrix(arr) {
    var ans = [];
    var n = arr.length;
    var m = arr[0].length;
    var total = n * m;
    var tw = 0;
    var bw = n - 1;
    var lw = 0;
    var rw = m - 1;
    while (total > 0) {
        for (var j = lw; j <= rw && total > 0; j++) {
            ans.push(arr[tw][j]);
            total--;
        }
        tw++;
        for (var i = tw; i <= bw && total > 0; i++) {
            ans.push(arr[i][rw]);
            total--;
        }
        rw--;
        for (var j = rw; j >= lw && total > 0; j--) {
            ans.push(arr[bw][j]);
            total--;
        }
        bw--;
        for (var i = bw; i >= tw && total > 0; i--) {
            ans.push(arr[i][lw]);
            total--;
        }
        lw++;
    }
    return ans;
}
console.log(spiralMatrix(arr));
