var arr = [0, 2, 1, 5, 3, 4];
function arrConcatinate(arr) {
    arr.concat(arr);
    return arr;
}
console.log(arrConcatinate(arr));
