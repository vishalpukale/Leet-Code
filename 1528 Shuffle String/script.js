var s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3];
function restoreString(s, indices) {
    var ans = [];
    var i = 0;
    for (var _i = 0, indices_1 = indices; _i < indices_1.length; _i++) {
        var nums = indices_1[_i];
        ans[nums] = s[i];
        i++;
    }
    return ans.join("");
}
console.log(restoreString(s, indices));
