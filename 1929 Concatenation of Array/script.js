var arr = [0, 2, 1, 5, 3, 4];
function arrConcatinate(arr) {
    var len = arr.length;
    var ans = new Array(2 * len);
    for (var i = 0; i < arr.length; i++) {
        ans[i] = arr[i];
        ans[len + i] = arr[i];
    }
    return ans;
}
console.log(arrConcatinate(arr));
