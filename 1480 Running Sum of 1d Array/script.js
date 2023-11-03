var nums = [1, 2, 3, 4];
function runningSum(nums) {
    var ans = [];
    var temp = 0;
    for (var i = 0; i < nums.length; i++) {
        temp += nums[i];
        ans.push(temp);
    }
    return ans;
}
console.log(runningSum(nums));
