let arr = [0,2,1,5,3,4];

function arrConcatinate(arr: number[]): number[] {

    let len = arr.length;
    let ans: any[] = new Array(2*len);

    for(let i = 0; i < arr.length; i++) {
        ans[i] = arr[i];
        ans[len+i] = arr[i];
    }

    return ans;
}

console.log(arrConcatinate(arr));