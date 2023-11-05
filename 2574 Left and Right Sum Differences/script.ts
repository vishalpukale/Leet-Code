let nums: number[] = [10,4,8,3];
function leftRightDifference(nums: number[]): number[] {

    let leftSum : number[]= [];
    let rightSum: number[] = [];
    let ans: number[] = [];

    if(nums.length <= 1) return [0];

    //for leftsum
    for(let i = 1; i < nums.length; i++) {
        leftSum[0] = 0;
        leftSum[i] = leftSum[i-1] + nums[i-1];
    }
    //for rightsum
    nums = nums.reverse();
    for(let i = 1; i < nums.length; i++){
        rightSum[0] = 0;
        rightSum[i] = rightSum[i-1] + nums[i-1];
    }
    rightSum = rightSum.reverse();


    //for final
    for(let i = 0; i < nums.length; i++){
        let sub = leftSum[i] - rightSum[i];
        if(sub<0){
            ans.push(Math.abs(sub));
        }
        else ans.push(sub);
    }

    return ans;
};

console.log(leftRightDifference(nums));