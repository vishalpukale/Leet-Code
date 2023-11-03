var arr = [2, 7, 11, 15];
function twoSum(arr, target) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        var res = target - arr[i];
        if (map[res] != undefined) {
            return [map[res], i];
        }
        map[arr[i]] = i;
    }
    return [];
}
console.log(twoSum(arr, 17));
