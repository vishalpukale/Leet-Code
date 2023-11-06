var nums = [1, 1, 2, 3];
function decompressRLElist(nums) {
    var ans = [];
    for (var i = 0; i < nums.length; i += 2) {
        var freq = nums[i];
        var value = nums[i + 1];
        while (freq != 0) {
            ans.push(value);
            freq--;
        }
    }
    return ans;
}
;
console.log(decompressRLElist(nums));
