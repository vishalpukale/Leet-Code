var nums = [2, 5, 1, 3, 4, 7];
function shuffleArray(nums, n) {
    var ans = [];
    var l = 0;
    var r = n;
    while (l < n) {
        ans.push(nums[l]);
        ans.push(nums[r]);
        l++;
        r++;
    }
    return ans;
}
console.log(shuffleArray(nums, 3));
