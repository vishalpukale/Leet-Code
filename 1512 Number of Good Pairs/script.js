var nums = [1, 2, 3, 1, 1, 3];
function goodPairs(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j])
                count++;
        }
    }
    return count;
}
console.log(goodPairs(nums));
