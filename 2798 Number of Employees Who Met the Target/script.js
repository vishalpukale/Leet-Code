var hours = [0, 1, 2, 3, 4];
function noOFtarget(hours, target) {
    var count = 0;
    for (var i = 0; i < hours.length; i++) {
        if (hours[i] >= target)
            count++;
    }
    return count;
}
console.log(noOFtarget(hours, 2));
