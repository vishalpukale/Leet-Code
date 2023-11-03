let arr = [1, 2, 3, 4, 5];

function rotateInRange(arr, l , r){

    while(l<r){
        let temp = arr[r];
        arr[r] = arr[l];
        arr[l] = temp;
        l++;
        r--;
    }
}

function rotate(arr, k){

    let n = arr.length;
    k = k%n;

    rotateInRange(arr, n-k, n-1);
    rotateInRange(arr, 0, n-k-1);
    rotateInRange(arr, 0, n-1);
}

rotate(arr, 3);

console.log(arr);