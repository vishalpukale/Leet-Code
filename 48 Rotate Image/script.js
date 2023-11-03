var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function rotateArray(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[r];
        arr[r] = arr[l];
        arr[l] = temp;
        l++;
        r--;
    }
}
function rotate90(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr[i].length; j++) {
            var temp = arr[j][i];
            arr[j][i] = arr[i][j];
            arr[i][j] = temp;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        rotateArray(arr[i]);
    }
    return arr;
}
console.log(rotate90(arr));
