var arr = [-1, 0, 3, 5, 9, 12];
function binarySearch(arr, target) {
    var n = arr.length;
    var l = 0;
    var r = n - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, -1));
