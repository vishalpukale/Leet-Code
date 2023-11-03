var nums = [8, 1, 2, 2, 3];
function smallerNumbersThanCurrent(nums) {
    var ans = [];
    var maxi = -Infinity;
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxi)
            maxi = nums[i];
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < maxi)
            count++;
        ans.push(count);
    }
    return ans;
}
;
console.log(smallerNumbersThanCurrent(nums));
