var nums = [10, 4, 8, 3];
function leftRightDifference(nums) {
    var leftSum = [];
    var rightSum = [];
    var ans = [];
    if (nums.length <= 1)
        return [0];
    //for leftsum
    for (var i = 1; i < nums.length; i++) {
        leftSum[0] = 0;
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }
    //for rightsum
    nums = nums.reverse();
    for (var i = 1; i < nums.length; i++) {
        rightSum[0] = 0;
        rightSum[i] = rightSum[i - 1] + nums[i - 1];
    }
    rightSum = rightSum.reverse();
    //for final
    for (var i = 0; i < nums.length; i++) {
        var sub = leftSum[i] - rightSum[i];
        if (sub < 0) {
            ans.push(Math.abs(sub));
        }
        else
            ans.push(sub);
    }
    return ans;
}
;
console.log(leftRightDifference(nums));
