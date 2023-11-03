let nums = [1,2,3,4];

function runningSum(nums: number[]): number[]{
    let ans: number[] = [];
    let temp = 0;

    for(let i = 0; i < nums.length; i++) {
        temp += nums[i];
        ans.push(temp);
    }
    return ans;
}


console.log(runningSum(nums));