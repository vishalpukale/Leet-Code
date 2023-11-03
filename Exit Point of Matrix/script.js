var arr = [
    [0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0]
];
function exitPoint(arr) {
    var i = 0;
    var j = 0;
    var dirn = "R";
    var n = arr.length;
    var m = arr[0].length;
    while (i >= 0 && i < n && j >= 0 && j < m) {
        if (arr[i][j] == 1) {
            if (dirn == "R")
                dirn = "D";
            else if (dirn == "D")
                dirn = "L";
            else if (dirn == "L")
                dirn = "U";
            else if (dirn == "U")
                dirn = "R";
            arr[i][j] = 0;
        }
        if (dirn == "R")
            j++;
        else if (dirn == "D")
            i++;
        else if (dirn == "L")
            j--;
        else if (dirn == "U")
            i--;
    }
    if (dirn == "R")
        j--;
    else if (dirn == "D")
        i--;
    else if (dirn == "L")
        j++;
    else if (dirn == "U")
        i++;
    console.log(i, j);
}
exitPoint(arr);
