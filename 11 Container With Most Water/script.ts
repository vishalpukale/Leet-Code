let arr = [1,8,6,2,5,4,8,3,7];


function containerWithMostWater(arr: number[]): number {

    let l = 0;
    let r = arr.length-1;
    let maxi = 0;

    while(l < r) {

        let height = Math.min(arr[l], arr[r]);
        let width = r-l;
        let total = height * width;
        maxi =  Math.max(maxi, total);

        if(arr[l]<arr[r]) l++;
        else r--;
    }
    return maxi;
}

console.log(containerWithMostWater(arr));