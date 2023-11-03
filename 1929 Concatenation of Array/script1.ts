let arr = [0,2,1,5,3,4];

function arrConcatinate(arr: number[]): number[] {

    arr.concat(arr);
    return arr;
}

console.log(arrConcatinate(arr));