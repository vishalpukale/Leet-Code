let arr = [-1,0,3,5,9,12];

function binarySearch(arr, target){

    let n = arr.length;
    let l = 0;
    let r = n-1;

    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            l = mid + 1;
        }
        else if(arr[mid] > target){
            r = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, -1));