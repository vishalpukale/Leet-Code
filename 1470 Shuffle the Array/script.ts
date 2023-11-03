let nums = [2,5,1,3,4,7];

function shuffleArray(nums: number[], n: number): number[] {
    let ans: number[] = [];
    let l = 0;
    let r = n;

    while(l<n){
        ans.push(nums[l]);
        ans.push(nums[r]);
        l++;    
        r++;
    }
    return ans;
}


console.log(shuffleArray(nums, 3));