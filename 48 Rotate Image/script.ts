let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function rotateArray(arr){

    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let temp = arr[r];
        arr[r] = arr[l];
        arr[l] = temp;
        l++;
        r--;
    }
}

function rotate90(arr: number[][]) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr[i].length; j++) {
            let temp = arr[j][i];
            arr[j][i] = arr[i][j];
            arr[i][j] = temp;
        }
    }

    for(let i = 0; i < arr.length; i++) {
        rotateArray(arr[i]);
    }
    return arr;
}


console.log(rotate90(arr));