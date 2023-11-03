let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


function spiralMatrix(arr: number[][]) : number[] {

    let ans :number[] = [];

    let n = arr.length;
    let m = arr[0].length;

    let total = n*m;

    let tw = 0;
    let bw = n-1;

    let lw = 0;
    let rw = m-1;

    while(total>0){

        for(let j = lw; j<=rw && total>0; j++){
            ans.push(arr[tw][j]);
            total--;
        }
        tw++;

        for(let i = tw; i<=bw && total>0; i++){
            ans.push(arr[i][rw]);
            total--;
        }
        rw--;

        for(let j = rw; j>=lw && total>0; j--){
            ans.push(arr[bw][j]);
            total--;
        }
        bw--;

        for(let i = bw; i>=tw && total>0; i--){
            ans.push(arr[i][lw]);
            total--;
        }
        lw++;
    }
    return ans;
}


console.log(spiralMatrix(arr));