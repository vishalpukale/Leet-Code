let nums: number[] = [1,1,2,3];

function decompressRLElist(nums: number[]): number[] {
    
    let ans = [];
    
    for(let i = 0; i < nums.length; i+=2) {
        let freq = nums[i];
        let value = nums[i+1];

        while(freq != 0){
            ans.push(value);
            freq--;
        }
    }
    return ans;
};  

console.log(decompressRLElist(nums));