var arr = [2, 0, 2, 1, 1, 0];
function swap(arr, l, r) {
    var temp = arr[r];
    arr[r] = arr[l];
    arr[l] = temp;
}
function sort012(arr) {
    var l = 0;
    var r = 0;
    var k = arr.length - 1;
    while (l <= k) {
        if (arr[l] == 0) {
            swap(arr, l, r);
            l++;
            r++;
        }
        else if (arr[l] == 1) {
            l++;
        }
        else if (arr[l] == 2) {
            swap(arr, l, k);
            k--;
        }
    }
    return arr;
}
console.log(sort012(arr));
