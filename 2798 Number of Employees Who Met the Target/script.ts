let hours = [0,1,2,3,4];

function noOFtarget(hours: number[], target: number): number {
    let count = 0;
    for(let i = 0; i < hours.length; i++) {
        if(hours[i] >= target) count++;
    }
    return count;
}


console.log(noOFtarget(hours, 2));