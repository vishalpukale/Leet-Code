let arr = [2,0,2,1,1,0];


function swap(arr, l, r){

    let temp = arr[r];
    arr[r] = arr[l];
    arr[l] = temp;
}


function sort012(arr: number[]){

    let l = 0;
    let r = 0;
    let k = arr.length-1;

    while(l<=k){
        if(arr[l] == 0){
            swap(arr, l, r);
            l++;
            r++;
        }
        else if(arr[l] == 1){
            l++;
        }    
        else if(arr[l] == 2){
            swap(arr, l, k);
            k--;
        }
    }
    return arr;
}


console.log(sort012(arr));