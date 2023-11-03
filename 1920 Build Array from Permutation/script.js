var arr = [0, 2, 1, 5, 3, 4];
function arrFromPermutation(arr) {
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
        ans.push(arr[arr[i]]);
    }
    return ans;
}
console.log(arrFromPermutation(arr));
