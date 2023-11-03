let arr = [2,7,11,15];
function twoSum(arr: number[], target : number) : number[]{

    let map = {};
    for(let i = 0; i < arr.length; i++){

        let res = target - arr[i];
        if(map[res] != undefined){
            return [map[res], i];
        }
        map[arr[i]] = i;
    }

    return [];
}



console.log(twoSum(arr, 17));