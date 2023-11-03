let nums = [8,1,2,2,3];

function smallerNumbersThanCurrent(nums: number[]): number[] {

    let ans: number[] = [];
    let maxi = -Infinity;
    let count = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > maxi) maxi = nums[i];
    }
    for(let i = 0; i<nums.length; i++){
        if(nums[i] < maxi) count++;
        ans.push(count);
    }
    return ans;
};

console.log(smallerNumbersThanCurrent(nums));